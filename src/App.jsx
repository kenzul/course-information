
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.parts[0]}></Part>
      <Part content={props.parts[1]}></Part>
      <Part content={props.parts[2]}></Part>
    </div>
  )
}

const Part = (props) => {
  return <p>{props.content.name} {props.content.exercises}</p>
}

const Total = (props) => {
  const total = props.parts.reduce((accum, current) => accum + current.exercises, 0);
  return <p>{total}</p>
}


const App = () => {
  const course = "Half Stack Application Development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App;