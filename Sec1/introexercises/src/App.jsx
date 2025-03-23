

/*parts*/
const Part = ({part}) => {
  return (
    <div>
      <p>{part}</p>
    </div>
  );

}

/*header render name of course*/ 
const Header = ({course}) => {
  console.log(course)
  console.log(course.parts[0].name)
  return (
     <div>{course.name}</div>
  );
}
/*content renders parts and number of exercises*/ 
const Content = ({course}) => {
  return (
    <div>
      <Part part={course.parts[0].name}/>
      <Part part={course.parts[1].name}/>
      <Part part={course.parts[2].name}/>
    </div>
  );
}
/*total number of exercises*/ 
const Total = ({course}) => {
  return (
    <>
    <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
      
    </div>
  )

  ;
}

export default App
