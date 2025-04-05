import { useState , useEffect } from 'react'
import Person from './Person'
import PersonForm from './PersonForm'
import Filter from './Filter'
import axios from 'axios'
import personService from './services/persons'
import './index.css'

const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  
  return (
    <div className='nameadded'>
      {message}
    </div>
  )
}
const App = (props) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('') //controlling the form input
  const [newNumber, setNewNumber] = useState('') //controlling the form input
  const [newFilter, setNewFilter] = useState('')
  const [nameMessage, setNameMessage] = useState(null)
  useEffect(() => {
    personService 
      .getAll()
      .then(response => {
        setPersons(response)
      })
    },[])

    /*console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    },[]) */

   const addName = (event) => {
     //event.preventDefault()
     const nameObject = {
     name: newName,
     number: newNumber,
     id: newName
      }
      if (persons.some(person => person.name  === newName )) {
       // alert(`${newName} is already added to the phonebook`)
          
          if(window.confirm('replace the old number with a new one?')) {
            personService
            .update(nameObject)
            .then(response => {
                setPersons(persons.map(person => newName === person.id ? nameObject : person))
                setNewName('') 
                setNewNumber('')
                setNameMessage( `Updated ${newName}`)
                setTimeout(() => {
                  setNameMessage(null);
                },5000);
                })
            .catch( error => {
              setNameMessage( `Information of ${newName} has already been removed from server`)
              setTimeout(() => {
                setNameMessage(null)
              },5000)
            })

          } else {
            console.log('number update canceled');
            setNewName(''); 
            setNewNumber('');
          }
        }
      else {
        //setPersons(persons.concat(nameObject))
        //setNewName('') 
       // setNewNumber('')
       /* axios
          .post('http://localhost:3001/persons',nameObject)
          .then(response => {
              console.log(response)
          })*/
        personService
          .create(nameObject)
          .then(response => {
              setPersons(persons.concat(response))
              setNewName('') 
              setNewNumber('')
              setNameMessage( `Added ${response.name}`)
              setTimeout(() => {
                setNameMessage(null)
              },5000)
        })
      } 
    }

  const trashName = (id) => {
    console.log(id)
    personService
      .trash(id)
      .then(()=> setPersons(persons.filter(person => person.id !==id)));
  }  
  
  const handleTrash = (event, id) => {
    event.preventDefault();
    if(window.confirm('Are sure want to delete?')) {
      trashName(id);
    } else {
      console.log('canceled');
  }
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addName()
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {nameMessage}/>
      <Filter newFilter={newFilter} handleFilterChange= {handleFilterChange}/>
        <h3> Add a new name and number</h3>
        <PersonForm  
          handleFormSubmit={handleFormSubmit}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange} />
        <h3>Numbers</h3>
      <ul>
        {Array.isArray(persons) && persons.map(person => 
          <Person key={person.name} person={person} filter={newFilter} handleTrash = {handleTrash} />
        )}
        </ul>

    </div>
  )
}

export default App
