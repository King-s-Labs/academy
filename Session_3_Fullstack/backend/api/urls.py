from django.urls import path
from . import views

urlpatterns = [
    path('welcome-academy-message/', views.get_academy_welcome, name='get_academy_welcome'),
]