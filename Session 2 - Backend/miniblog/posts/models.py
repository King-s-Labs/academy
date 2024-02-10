from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    # Enter your model here

    def __str__(self):
        return self.content[:20]  # Return the first 20 characters of the post