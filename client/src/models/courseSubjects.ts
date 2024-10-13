import { Course, courses } from "./Course";
import { Subject, subjects } from "./Subject";

export interface CourseSubjects{
    course:Course;
    subject:Subject;
}

export const courseSubjects:CourseSubjects[]=[
    {course:courses[0],subject:subjects[0]},
    {course:courses[0],subject:subjects[1]},
    {course:courses[1],subject:subjects[0]},
    {course:courses[1],subject:subjects[2]},
    {course:courses[2],subject:subjects[1]},
    {course:courses[2],subject:subjects[2]}

];