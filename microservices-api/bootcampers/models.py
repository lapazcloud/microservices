from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=120, help_text='Full Name')
    address = models.CharField(max_length=120, help_text="Address")
    email = models.CharField(max_length=120, help_text="Email address")
    phone = models.IntegerField()

    def __str__(self):
        return self.name
