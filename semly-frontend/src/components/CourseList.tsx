import { useState } from "react";
import { Course } from "../constants/commonTypes";
import { useAppSelector } from "../state/hooks";
import {
  selectHasFetchingCourseFailed,
  selectSelectedCourseIndex,
} from "../state/slices/courseSlice";
import AddCourseModal from "./AddCourseModal";
import CourseTab from "./CourseTab";

interface CourseListProps {
  courses: Course[];
}

const CourseList = ({ courses }: CourseListProps) => {
  // useState creates a variable and its setter
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  // useAppSelector gets a variable from the Redux "store" aka its state. You can find
  // the state in courseSlice.ts under the interface CourseState.
  const selectedCourseIndex = useAppSelector(selectSelectedCourseIndex);
  const renderedCourses = courses.map((course, index) => (
    <CourseTab
      course={course}
      isSelected={index === selectedCourseIndex}
      key={course.code}
    />
  ));
  const hasFetchingFailed = useAppSelector(selectHasFetchingCourseFailed);
  const fetchingFailedErrorText = hasFetchingFailed && (
    <div>Unable to get courses.</div>
  );

  return (
    <div>
      <AddCourseModal
        // The following are props passed down to the AddCourseModal component.
        // You can think of props as arguments passed to a component.
        // Whenever props change, the component will re-render.
        // (what a component renders is what it returns).
        isOpen={isAddCourseModalOpen}
        closeModal={() => setIsAddCourseModalOpen(false)}
      />
      <div className="list-header">
        <h1>My Courses:</h1>
        <button
          className="add-course-btn"
          onClick={() => setIsAddCourseModalOpen(true)}
        >
          Add
        </button>
      </div>
      {renderedCourses}
      {fetchingFailedErrorText}
    </div>
  );
};

export default CourseList;
