from django.db import models
from users.models import Users, AsosiyModel
from kurs.choices import TestRoleChoice



class Kurs(AsosiyModel):
    title = models.CharField(max_length=255)
    poster = models.TextField()
    body = models.TextField()
    price = models.IntegerField(default=0)
    type = models.CharField(max_length=255)
    reting = models.IntegerField(default=0)
    kurs_vaqti = models.DecimalField(max_digits=5, decimal_places=2)


class KursEgasi(AsosiyModel):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, name='kurs_egasi')
    kurs_id = models.ForeignKey(Kurs, on_delete=models.CASCADE)

class KursBolim(AsosiyModel):
    kurs_id = models.ForeignKey(Kurs, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    tartib_raqami = models.IntegerField(default=0)
    percent = models.IntegerField(default=0)

class KursMavzu(AsosiyModel):
    bolim_id = models.ForeignKey(KursBolim, on_delete=models.CASCADE)
    mavzu_name = models.CharField(max_length=255)
    mavzu_matni = models.TextField()
    media_resurslar = models.JSONField()
    resurslar = models.JSONField()
    media_time = models.BigIntegerField()

class BolimTest(AsosiyModel):
    bolim_id = models.ForeignKey(KursBolim, on_delete=models.CASCADE)
    savol = models.JSONField()
    a = models.CharField(max_length=30)
    b = models.CharField(max_length=30)
    c = models.CharField(max_length=30)
    d = models.CharField(max_length=30)