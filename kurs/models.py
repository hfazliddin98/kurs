from django.db import models
from users.models import Users, AsosiyModel



class Kurs(AsosiyModel):
    title = models.CharField(max_length=255)
    poster = models.TextField()
    body = models.TextField()
    price = models.IntegerField(default=0)
    type = models.CharField(max_length=255)
    reting = models.IntegerField(default=0)
    kurs_vaqti = models.DecimalField(max_digits=5, decimal_places=2)


class KursEgasi(AsosiyModel):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    kurs_id = models.ForeignKey(Kurs, on_delete=models.CASCADE)