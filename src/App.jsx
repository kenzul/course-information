
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.part1}></Part>
      <Part content={props.part2}></Part>
      <Part content={props.part3}></Part>
    </div>
  )
}

const Part = (props) => {
  return <p>{props.content.name} {props.content.exercises}</p>
}

const Total = (props) => {
  return <p>{props.total}</p>
}


const App = () => {
  const course = "Half Stack Application Development";
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };
  const part3 = { name: "State of a component", exercises: 14 };

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total total={part1.exercises + part2.exercises + part3.exercises}></Total>
    </div>
  )
}

export default App;