import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Countrieslist = ({displayCountries , handleShow}) => {
  if (displayCountries.length === 1) {
    console.log(displayCountries)
    return (
      <>
      <h2> {displayCountries[0].name.common} </h2>
      <li>Capital {displayCountries[0].capital} </li>
      <li>Area {displayCountries[0].area} </li>
      <h3>Languages</h3>
      <ul>
        {Object.values(displayCountries[0].languages).map(language => (
        <li key = {language}> {language} </li>
      ))}
      </ul>
      <img
        src={displayCountries[0].flags.png}
      />
      </>
    )
  }
  
  if (displayCountries.length > 10 ) {
    return <p> Too many matches, specify another filter </p>
  }
   
  return ( 
    <ul>
    {displayCountries.map(country => (
    <li key = {country.name.common}> {country.name.common} 
    <button onClick={(event) => handleShow(event, country.name.common)}> Show </button>
    </li>
    ))}
    </ul>
  )
}
const App = () => {
 
  const [newFilter,setNewFilter] = useState('')
  const [displayCountries,setDisplayCountries] = useState([])

  const handleFilterChange = (event) => {
    event.preventDefault();
    console.log('Filter ' + event.target.value);
    setNewFilter(event.target.value)
  }

  const handleShow = (event , countryName) => {
    event.preventDefault();
    console.log('Clicked Show');
    const selectedCountry = displayCountries.find(country => country.name.common === countryName)
    setDisplayCountries([selectedCountry])
  }
  
  useEffect(() => {
    if(newFilter) {
      console.log('fetching countries information');
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => { 
            setDisplayCountries(response.data.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase())));
            console.log(displayCountries)
        })
    }
  },[newFilter])

  return (
    <div>
      find countries <input 
        value={newFilter}
        onChange={handleFilterChange}
      /> 
        
      < Countrieslist displayCountries = {displayCountries} handleShow = {handleShow}/>

    </div>
  )
}

export default App