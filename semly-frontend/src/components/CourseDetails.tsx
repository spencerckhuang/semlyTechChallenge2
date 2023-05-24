import { Course } from "../constants/commonTypes";

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails = ({ course }: CourseDetailsProps) => {
  return (
    <div>
      <h1>Selected Course: </h1>
      <p>Name: {course.name}</p>
      <p>Code: {course.code}</p>
      <p>Credits: {course.credits}</p>
    </div>
  );
};

export default CourseDetails;
