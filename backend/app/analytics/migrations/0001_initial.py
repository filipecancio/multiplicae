# Generated by Django 3.0.3 on 2020-02-12 23:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('trails', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserNodeProgress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('progress', models.PositiveIntegerField(default=0)),
                ('node', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='node_progress', to='trails.Node')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_progress', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'node')},
            },
        ),
    ]
