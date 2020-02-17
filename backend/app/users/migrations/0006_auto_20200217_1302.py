# Generated by Django 3.0.3 on 2020-02-17 13:02

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_uuidkeyvalue'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='uuidkeyvalue',
            name='key',
        ),
        migrations.RemoveField(
            model_name='uuidkeyvalue',
            name='value',
        ),
        migrations.AddField(
            model_name='uuidkeyvalue',
            name='data',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, default=dict),
        ),
    ]
