from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    AREAS_OF_KNOWLEDGE = [
        ('CS', 'Computer Science'),
        ('ENG', 'Engineering'),
        ('MATH', 'Mathematics'),
        ('PHYS', 'Physics'),
        ('CHEM', 'Chemistry'),
        ('BIO', 'Biology'),
        ('MED', 'Medicine'),
        ('SOC', 'Social Sciences'),
        ('HUM', 'Humanities'),
        ('ARTS', 'Arts'),
        ('OTHER', 'Other'),
    ]

    STATUS_CHOICES = [
        ('DRAFT', 'Draft'),
        ('UNDER_REVIEW', 'Under Review'),
        ('PUBLISHED', 'Published'),
    ]

    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    area_of_knowledge = models.CharField(max_length=10, choices=AREAS_OF_KNOWLEDGE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='DRAFT')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    file = models.FileField(upload_to='articles/')

    def __str__(self):
        return self.title

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.author.username} on {self.article.title}'

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    maternal_last_name = models.CharField(max_length=100)
    paternal_last_name = models.CharField(max_length=100)
    area_of_knowledge = models.CharField(max_length=10, choices=Article.AREAS_OF_KNOWLEDGE)

    def __str__(self):
        return self.user.username