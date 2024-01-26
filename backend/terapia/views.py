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
        
        if data['nome'] == '' or data['email'] == '' or data['senha'] == '':
            info_essencial['valido'] = False
            return JsonResponse(info_essencial)
        
        try:
            all_users = Usuario.objects.all()
        except Usuario.DoesNotExist:
            raise Http404()

        for i in all_users:
            if usuario.nome == i.nome and data['email'] == i.user.email:
                info_essencial['valido'] = False
                return JsonResponse(info_essencial)
        
        user = User.objects.create_user(data['email'], data['email'], data['senha'])
        usuario.user = user
        usuario.save()

        validacaoUsuario = validacao(usuario.user.email, data['senha'])
        info_essencial['valido'] = validacaoUsuario['valido']

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
                          'valido': True}
            return JsonResponse(info_login)
        else:
            info_login = {'valido': False}
            return JsonResponse(info_login)