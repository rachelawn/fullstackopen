import Course from './Course'

/*
//parts
const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  );

}

//header render name of course
const Header = ({course}) => {
  console.log(course)
  console.log(course.parts[0].name)
  return (
     <div>
      <h1>{course.name}</h1>
      </div>
  );
}
//content renders parts and number of exercises
const Content = ({course}) => {
  return (
    <div>
      <ul> 
        {course.parts.map(part => 
          <Part key={part.id} part = {part} />
        )}
      </ul>
    </div>
  );
}
//total number of exercises
const Total = ({course}) => {
  console.log(course.parts)  
  
  const total = course.parts.reduce(
    (next, number) => { return next + number.exercises
    },0
  );

    return (
   <>
    <p>Number of exercises {total}</p>
    </>
  );
}

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}*/

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return ( 
    <div>
    {courses.map(course => (
    <Course key={course.id} course = {course} />
    ))}
    </div>
  );

 /*const course = {
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

  ;*/
}

export default App
