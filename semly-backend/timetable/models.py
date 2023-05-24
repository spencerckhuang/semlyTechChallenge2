from django.db import models


class Course(models.Model):
    """A course that students can take at Hopkins."""

    name = models.CharField(max_length=100)
    code = models.CharField(max_length=15, unique=True)
    credits = models.DecimalField(max_digits=2, decimal_places=1)
