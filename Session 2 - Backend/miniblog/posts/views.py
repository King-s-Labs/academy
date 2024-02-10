from django.shortcuts import render, redirect
from .models import Post
from django.contrib.auth.decorators import login_required
from django.utils import timezone

def post_list(request):
    posts = [] # Retrieve the posts here
    return render(request, 'posts/post_list.html', {'posts': posts})

@login_required
def post_new(request):
    # Enter your code here

    return render(request, 'posts/post_edit.html')

