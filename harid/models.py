from django.db import models
from users.models import Users, AsosiyModel
from tolov.models import PaymentsHistory


class Harid(AsosiyModel):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, name='harid_user')
    harid_id = models.CharField(max_length=255)
    xizmat_id = models.ForeignKey(PaymentsHistory, on_delete=models.CASCADE)