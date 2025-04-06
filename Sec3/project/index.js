/*console.log('hello world')

const http = require('http') //import http (web server) module

let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]
  const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' }) //application/json value in content type header informs the receiver the the data is in json format
    response.end(JSON.stringify(notes)) //transform notes array into JSON Format string method, response end() method expect strng or buffer to send as response body
  })

const PORT = 3001 //bind the server assigned to the app variable
app.listen(PORT)
console.log(`Server running on port ${PORT}`) */

const express = require('express') //import express which is a function that is used to create express application stored in app variable
const app = express()
app.use(express.json()) //express json parser 

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
      },
      {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
      },
      {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
      }
]

app.get('/', (request, response) => { //define route to application - delivers event handler that is used to handle HTTP get request made to apps root
  response.send('<h1>Hello World!</h1>') //request containsinformation of http request, response defines how request is responded to
}) //request is answered by using send method of repsonse object, server responds to grrp request by sending a response containing the strong hello world (passed to the send method)

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => { //defining parameters for routes in express, The id parameter in the route of a request can be accessed through the request object:

    const id = request.params.id
    const note = notes.find(note => note.id === id)
  
    if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
  })

app.delete('/api/notes/:id', (request, response) => {
   const id = request.params.id
   notes = notes.filter(note => note.id !== id)
  
   response.status(204).end()
  })

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => Number(n.id)))
      : 0
    return String(maxId + 1)
  }
  
  app.post('/api/notes', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: body.important || false,
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})