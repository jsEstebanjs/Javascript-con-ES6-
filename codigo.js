const courses = [
    { _id: 1, title: "JavaScript I" }, 
    { _id: 2, title: "HTML y CSS I" },
  ] 
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]


const printCourses = (courses,students,enrollments)=>{
courses.forEach(element => {
    let i=0;
    const id = element._id;
    console.log(`- ${element.title}`);

    enrollments.forEach((item)=>{
        if(item.course_id === id){
            if(students[i]!=undefined){
                i++
                let itemStudent = item.student_id
                students.forEach(_name=>{
                    if(itemStudent === _name._id){
                        console.log(_name.name)
                    }
                })
  
            }
        }
    })
});
}
printCourses(courses,students,enrollments);
//   JavaScript I
//   * Pedro Perez
// - HTML y CSS I
//   * Pedro Perez
//   * Maria Gomez

const printStudents = (courses,students,enrollments)=>{
    students.forEach(element => {
        const id = element._id;
        console.log(`- ${element.name}`);

        enrollments.forEach((item)=>{
            if(item.student_id === id){
                    let itemStudent = item.course_id

                    courses.forEach(_name=>{
                        if(itemStudent === _name._id){
                            console.log(_name.title)
                        }
                    })
                
            }
        })
    });

}
printStudents(courses,students,enrollments)
// - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
// - Maria Gomez
//   * HTML y CSS I