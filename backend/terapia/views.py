from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import Http404, HttpResponseForbidden, JsonResponse
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import Usuario, Login
import requests
from django.contrib.auth.models import User
from datetime import datetime

def validacao(email, senha):
    try:
        user = authenticate(username=email, password=senha)

        if user is not None:
            return {"valido": True}
        else:
            return{"valido": False}
    except:
        return {"mensagem": "Não existe conseguiu autenticar o usuário"}

@api_view(['POST'])
def cadastro(request):
    if request.method == 'POST':
        usuario = Usuario()
        data = request.data
        usuario.nome = data['nome']

        info_essencial = {"nome": data['nome'],
                                "email": data['email']}
        
        try:
            all_users = Usuario.objects.all()
        except Usuario.DoesNotExist:
            raise Http404()

        if usuario in all_users:
            dic = erro('Usuário já foi cadastrado e estão tentando cadastrá-lo novamente', info_essencial)
            return JsonResponse(dic)
        
        user = User.objects.create_user(data['email'], data['email'], data['senha'])
        usuario.user = user
        usuario.save()

        token_usuario = validacao(usuario.user.email, data['senha'])
        #info_essencial['token'] = token_usuario['token']
        info_essencial['mensagem'] = 'Usuário foi validado'

        return JsonResponse(info_essencial)

        
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        login = Login()
        data = request.data
        login.email = data['email']
        login.senha = data['senha']

        foi_validado = validacao(data['email'], data['senha'])

        if foi_validado['valido'] == True:
            info_login = {'email': login.email, 
                          'senha': login.senha,
                          'mensagem': "Usuário existe e já foi validado"}
            return JsonResponse(info_login)
        else:
            dic = erro("Usuário não existe é necessário cadastrá-lo", {})
            return JsonResponse(dic)
    
def erro(tipo, dic):
    dic['mensagem'] = tipo
    return dic