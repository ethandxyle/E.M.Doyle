// SERVER
//3 parts to a server
//FOUNDATION
const express = require("express")
// create an instance of our application
const app = express()
const cors = require("cors")

// logging tool
// this will help with routing and params
const logger = require("morgan")
app.use(logger("dev"))

// allows all sites to access our API, e.g. localhost:3000
// can access this API
app.use(cors())

// import fake data from mockdata.js file
const {bucketlist} = require("./mockData");


// what "station" (port) are we listening on?
const port = process.env.PORT || 3000;

// add body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//HANDLERS
// verb (route, cb())
// app.get("/", (req, res)=>{
//     res.redirect("/home")
// })
//
// app.get("/home", (req, res)=> {
//     res.send("I am the home page")
// })
//
// // parameters
// app.get("/api/bucket/:id", (req, res)=>{
//     console.log(req)
//     res.send(`Doggy route with parameter: ${req.params.id}`)
// })

// READ route
app.get("/api/bucket", (req, res)=>{
    res.json(bucketlist)
})

// CREATE data route
// how is data sent from client
let newId = 4
app.post("/api/bucket", (req, res)=>{
//     what is our goal??
//     add something to database
//     new bucket list item
    console.log("Backend description: ", req.body.description,)
    let newData = {
        id: newId++,
        description: req.body.description,
        isComplete: false,
    }
    bucketlist.push(newData)
    let receipt = newData
    res.json(receipt)
})

// DELETE route
app.delete("/api/bucket/:id", (req, res)=>{
    // casting a String into a Number
    let requestedId = Number(req.params.id)
    if(isNaN(requestedId)) {
        res.status(404).json({message: "Not a number!!!!"})
    }
    // find the index of existing comparison
    let bucketIndex = bucketlist.findIndex((element)=>{
        return element.id === requestedId
    })
    if(bucketIndex !== -1){
        console.log("Index: ", bucketIndex)
        let removedObj = bucketlist.splice(bucketIndex, 1)
        // pretending this came from the database
        let receipt = removedObj
        res.json(receipt)
    } else {
        res.status(404).json({error: "Unable to find requested ID."})
    }
})

// Update - PUT
app.put("/api/bucket/:id", (req, res)=>{
    // we need the id
    // casting a String into a Number
    let requestedId = Number(req.params.id)
    if(isNaN(requestedId)) {
        res.status(404).json({message: "Not a number!!!!"})
    }
    if(!requestedId){
        res.status(404).json({message: "No id supplied."})
    }
    let item = bucketlist.find(
        (el)=>{
            return requestedId === el.id
        }
    )
//     returning an element
//     {
//          id: 2,
//          description: "Learn React",
//          isComplete: false => true
//      }
    if(item) {
        item.isComplete  = !item.isComplete
        let receipt = item
        res.json(receipt)
    } else  {
        res.status(404).json({error: "Unable to find requested ID."})
    }
})


//LISTENER
app.listen(port, ()=>{
    console.log(`Bucketlist server running on port ${port}`)
})