# Generated by Django 5.2.3 on 2025-06-16 11:16

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('kurs', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='kursegasi',
            name='kurs_egasi',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='kursegasi',
            name='kurs_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kurs.kurs'),
        ),
        migrations.AddField(
            model_name='kursmavzu',
            name='bolim_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kurs.kursbolim'),
        ),
    ]
