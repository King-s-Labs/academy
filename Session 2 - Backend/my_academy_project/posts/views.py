from django.shortcuts import render, redirect
from .models import Post
from django.contrib.auth.decorators import login_required
from django.utils import timezone

def post_list(request):
    posts = Post.objects.filter(created_at__lte=timezone.now()).order_by('-created_at')
    return render(request, 'posts/post_list.html', {'posts': posts})

@login_required
def post_new(request):
    if request.method == "POST":
        content = request.POST.get('content')
        post = Post(author=request.user, content=content)
        post.save()
        return redirect('post_list')
    return render(request, 'posts/post_edit.html')

