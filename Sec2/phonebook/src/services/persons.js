import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons'
//const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request
    .then(response => {
        console.log(response.data);
        return response.data
    })
    .catch(error=> {
    console.log('fail')
  }) 
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data).catch(error=> {
    console.log('fail')
  })
}

const update = (newObject) => {
  const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  return request
    .then(response => {
        console.log(response.data)
        return response.data
    })
   /* .catch( error => {
        return (
            error
        )
    })*/
}

const trash = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
        .then(response => {
            console.log(response.data);
            return response.data
        })
        .catch(error => {
            console.log('fail')
      })
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  trash: trash
}