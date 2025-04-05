import { useState } from 'react'

const Person = ({person , filter, handleTrash}) => {
  if (person.name.toLowerCase().includes(filter.toLowerCase())) {
    return (
      <li>
        {person.name} {person.number}   <button onClick={(event) => handleTrash(event,person.id)}> Delete</button>
      </li>
    )
  }
  else return null;
}

export default Person
