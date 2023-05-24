import { RootState } from "../store";
import { getCoursesEndpoint } from "./../../constants/endpoints";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Course } from "../../constants/commonTypes";

interface CourseState {
  courses: Course[];
  selectedCourseIndex: number;
  fetching: boolean;
  hasFetchingFailed: boolean;
}

const initialState: CourseState = {
  courses: [],
  selectedCourseIndex: 0,
  fetching: false,
  hasFetchingFailed: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchCourses = createAsyncThunk("course/fetchCourses", async () => {
  // In more simple language, this function lets us make an HTTP request to our backend
  // server within Redux. We can then use the response to update the state.
  const res = await fetch(getCoursesEndpoint(), {
    method: "GET",
  });
  const data = await res.json();
  return data;
});

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    // Reducers are functions that you can call, or "dispatch" to modify the
    // state. You will need to add reducer here to change the selected course.
  },
  extraReducers(builder) {
    // Async thunks have three states: pending, fulfilled, and rejected.
    // We can use the builder to add reducers for each of these states and update the
    // CourseSlice state accordingly.
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.fetching = false;
        if (state.selectedCourseIndex >= state.courses.length) {
          state.selectedCourseIndex = 0;
        }
      })
      .addCase(fetchCourses.pending, (state, action) => {
        state.fetching = true;
        state.hasFetchingFailed = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.fetching = false;
        state.hasFetchingFailed = true;
      });
  },
});

// These are selectors we can use to access the state. They are not necessary but serve
// as a convenience function to easily access the state inside of a useAppSelector().
export const selectCourses = (state: RootState) => state.course.courses;
export const selectSelectedCourseIndex = (state: RootState) =>
  state.course.selectedCourseIndex;
export const selectFetching = (state: RootState) => state.course.fetching;
export const selectHasFetchingCourseFailed = (state: RootState) =>
  state.course.hasFetchingFailed;

export default courseSlice.reducer;
