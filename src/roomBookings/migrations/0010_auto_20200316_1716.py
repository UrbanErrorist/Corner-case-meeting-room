# Generated by Django 3.0.3 on 2020-03-16 17:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('roomBookings', '0009_auto_20200302_1805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='time_slot',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bookings', to='roomBookings.TimeSlot'),
        ),
        migrations.AlterField(
            model_name='timeslot',
            name='room_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='time_slots', to='roomBookings.Room'),
        ),
    ]
