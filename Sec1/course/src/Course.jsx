
/*parts*/
const Part = ({part}) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    );
  
  }
  
  /*header render name of course*/ 
  const Header = ({course}) => {
    console.log(course)
    console.log(course.parts[0].name)
    return (
       <div>
        <h1>{course.name}</h1>
        </div>
    );
  }
  /*content renders parts and number of exercises*/ 
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
  /*total number of exercises*/ 
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
}

export default Course