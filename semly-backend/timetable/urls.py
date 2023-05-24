from django.urls import path
from .views import CourseView

urlpatterns = [path("courses/all", CourseView.as_view())]
