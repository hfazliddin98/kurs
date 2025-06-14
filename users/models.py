import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from .choices import UserRoleChoice




class AsosiyModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable = False)
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateField(auto_now = True)

    class Meta:
        abstract = True