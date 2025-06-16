from django.db import models
from users.models import AsosiyModel, Users


class Payments(AsosiyModel):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, name='user_payments')
    balance = models.BigIntegerField()



class PaymentsHistory(AsosiyModel):
    sender_id = models.BigIntegerField()
    geter_id = models.BigIntegerField()
    payment_type = models.BigIntegerField()
    changed_value = models.BigIntegerField()
    time = models.TimeField()