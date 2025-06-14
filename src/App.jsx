
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
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, {
        name: 'Using props to pass data',
        exercises: 7
      }, {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content
        parts={course.parts}>
      </Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App