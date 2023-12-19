import './styles/App.css';
import Course from './components/Course.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [courses, setCourses] = useState([]);
  const [GPA, setGPA] = useState(0.00);
  const [gradeScale, setGradeScale] = useState("red");
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    if(courses.length == 0){
      setGPA(0.00);
      return;
    }
    let weightedGrade = 0;
    let creditCount = 0;
    courses.forEach(course => {
      if(course.credits <= 0) return;
      weightedGrade += (parseInt(course.credits) * parseFloat(course.grade));
      creditCount += parseInt(course.credits);
    });
    if(creditCount == 0){
      setGPA(0.00);
      return;
    }
    let gradePointAverage = weightedGrade / creditCount;
    setGPA(gradePointAverage);
  }, [courses]);

  function addCourse(){
    let courseCopy = [...courses, {name : "", credits : 0, grade : 0.0}];
    setCourses(courseCopy);
  }

  function determineGradeScale(GPA){
    if(GPA >= 3.5){
      setGradeScale("bright-green");
      return;
    }
    if(GPA >= 3.0){
      setGradeScale("green");
      return;
    }
    if(GPA >= 2.7){
      setGradeScale("green-yellow");
      return;
    }
    if(GPA >= 2.3){
      setGradeScale("yellow");
      return;
    }
    if(GPA >= 2.0){
      setGradeScale("orange");
      return;
    }
    setGradeScale("red");
  }

  return (
    <div className="App">
      {courses.map((course, index) => (
        <Course index={index} courses={courses} setCourses={setCourses}/>
      ))}
      <button class="add-course" onClick={() => addCourse()}>Add Course</button>
      <h1 class={gradeScale + " grade"}>{formatter.format(GPA)}</h1>
    </div>
  );
}

export default App;
