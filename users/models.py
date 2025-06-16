import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from users.choices import UserRoleChoice




class AsosiyModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable = False)
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateField(auto_now = True)

    class Meta:
        abstract = True


class Users(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable = False)
    role = models.CharField(max_length=30, choices=UserRoleChoice.choices, default=UserRoleChoice.TALABA)
    telegram_id = models.IntegerField()
    kurs_like = models.JSONField()



class TelegramDB(AsosiyModel):
    telegram_id = models.ForeignKey(Users, on_delete=models.CASCADE, name='telegram_db')
    platform_id = models.CharField(max_length=255)
    user_phone_number = models.CharField(max_length=255)