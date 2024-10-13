import { Course, courses } from "../models/Course";
import { courseSubjects, CourseSubjects } from "../models/courseSubjects";
import { Subject } from "../models/Subject";

export function getSubjectsInCourse(course:Course,courseSubjects:CourseSubjects[]):Subject[]{
    const allCSubject =courseSubjects.filter(cs => cs.course.id==course.id);
    const allSubject =allCSubject.map(s => s.subject);
    console.log(allSubject);
    return allSubject;
}
// getSubjectsInCourse(courses[0],courseSubjects);