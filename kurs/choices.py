from django.db import models

class TestRoleChoice(models.TextChoices):
    A = ("a", "a")
    B = ("b", "b")
    C = ("c", "c")
    D = ("d", "d")
    