from .models import Course
from .serializers import CourseSerializer
from rest_framework.test import APITestCase, APIClient


class CourseTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.course1 = Course.objects.create(
            name="Intermediate Programming", code="EN.601.220", credits=4
        )
        self.course2 = Course.objects.create(
            name="Data Structures", code="EN.601.226", credits=4
        )
        self.course1.save()
        self.course2.save()

    def test_course_serializer(self):
        data = CourseSerializer(self.course2).data
        self.assertDictEqual(
            data,
            {
                "name": "Data Structures",
                "code": "EN.601.226",
                "credits": "4.0",
            },
        )

    def test_get_all_courses(self):
        response = self.client.get("/courses/all")
        data = response.data
        correct = [
            {
                "name": "Intermediate Programming",
                "code": "EN.601.220",
                "credits": "4.0",
            },
            {
                "name": "Data Structures",
                "code": "EN.601.226",
                "credits": "4.0",
            },
        ]
        self.assertEqual(2, len(data))
        self.assertListEqual(data, correct)
