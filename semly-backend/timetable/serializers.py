from rest_framework import serializers


class CourseSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    code = serializers.CharField(max_length=15)
    credits = serializers.DecimalField(max_digits=2, decimal_places=1)
