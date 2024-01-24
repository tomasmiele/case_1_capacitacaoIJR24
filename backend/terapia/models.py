from django.db import models
from django.contrib.auth.models import User


class Usuario(models.Model):
    nome = models.CharField(max_length=100, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.id) + '.' + self.nome
    
class Login(models.Model):
    email = models.CharField(max_length=100, null=False)
    senha = models.CharField(max_length=100, null=False)
    
    def __str__(self):
        return str(self.id) + '.' + self.email  