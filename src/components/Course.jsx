import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
        </div>
    )
}

export default Course;