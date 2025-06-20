from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def home(request):
     
     return render(request, 'asosiy/home.html')


@csrf_exempt
def login(request):
     
     return render(request, 'asosiy/login.html')


@csrf_exempt
def signup(request):
     
     return render(request, 'asosiy/signup.html')


