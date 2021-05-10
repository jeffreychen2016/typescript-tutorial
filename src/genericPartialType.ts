interface CourseGoal {
    title: string;
    description: string;
    completeUtil: Date
}

// we can use `Partial` type to set the properties to optional
// and once we done with our work (setting the values)
// we cast the type back to original type
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // this variable initializtion is NOT going to work
    // since {} is not compatible with CourseGoal
    // let courseGoal: CourseGoal = {}

    // use `Partial` generic type here.
    // it means all of the properties are becoming optional
    let courseGoal: Partial<CourseGoal> = {}

    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUtil = date

    // we need to convert the result back to `CourseGoal` type
    return courseGoal as CourseGoal
}