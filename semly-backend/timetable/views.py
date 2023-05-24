from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.request import HttpRequest
from .serializers import CourseSerializer
from .models import Course


class CourseView(APIView):
    def get(self, request: HttpRequest):
        return Response(CourseSerializer(Course.objects.all(), many=True).data)
