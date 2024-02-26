from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_academy_welcome(request):
    return Response({'message': 'Welcome to the academy!'})