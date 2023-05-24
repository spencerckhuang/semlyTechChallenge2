import { useEffect } from "react";
import CourseDetails from "./components/CourseDetails";
import CourseList from "./components/CourseList";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import {
  fetchCourses,
  selectCourses,
  selectSelectedCourseIndex,
} from "./state/slices/courseSlice";

function App() {
  const dispatch = useAppDispatch();
  const courses = useAppSelector(selectCourses);
  const selectedCourseIndex = useAppSelector(selectSelectedCourseIndex);

  useEffect(() => {
    // dispatch a redux action to fetch courses on app initialization
    dispatch(fetchCourses());
  }, [dispatch]);
  return (
    <div className="app-container">
      <div className="course-list">
        <CourseList courses={courses} />
      </div>
      <div className="course-details">
        {selectedCourseIndex < courses.length && (
          <CourseDetails course={courses[selectedCourseIndex]} />
        )}
      </div>
    </div>
  );
}

export default App;
