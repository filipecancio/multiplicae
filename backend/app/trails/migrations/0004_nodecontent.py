# Generated by Django 3.0.3 on 2020-02-13 14:08

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trails', '0003_initial_trail'),
    ]

    operations = [
        migrations.CreateModel(
            name='NodeContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_type', models.CharField(max_length=32)),
                ('content', django.contrib.postgres.fields.jsonb.JSONField(blank=True, default=dict)),
                ('node', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trails.Node')),
            ],
        ),
    ]