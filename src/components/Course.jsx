import { useState } from "react";

function Course(props) {

    function changeName(e){
        e.preventDefault();
        let courses = [...props.courses];
        courses[props.index].name = e.target.value;
        props.setCourses(courses);
    }

    function changeCredits(e){
        e.preventDefault();
        let courses = [...props.courses];
        courses[props.index].credits = e.target.value;
        props.setCourses(courses);
    }

    function changeGrade(e){
        e.preventDefault();
        let courses = [...props.courses];
        courses[props.index].grade = e.target.value;
        props.setCourses(courses);
    }

    return ( 
        <div class="course">
            <input type="text" placeHolder="Course Name" onChange={(e) => changeName(e)}/>
            <input type="number" placeHolder="Credits" onChange={(e) => changeCredits(e)}/>
            <select onChange={(e) => changeGrade(e)}>
                <option value="0.00" selected>-</option>
                <option value="4.0">A</option>
                <option value="3.7">A-</option>
                <option value="3.3">B+</option>
                <option value="3.0">B</option>
                <option value="2.7">B-</option>
                <option value="2.3">C+</option>
                <option value="2.0">C</option>
                <option value="1.7">C-</option>
                <option value="1.3">D+</option>
                <option value="1.00">D</option>
                <option value="0.67">D-</option>
                <option value="0.00">F</option>
            </select>
        </div>
    );
}

export default Course;