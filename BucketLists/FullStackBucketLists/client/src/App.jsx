import {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"
const App = () =>{

    const [bucketList, setBucketList] = useState([])
    const [newItem, setNewItem] = useState("")
    const baseUrl = "http://localhost:3000"

    useEffect(
        ()=>{
            //     communicate with the server
            let route = "api/bucket"
            let endpoint = `${baseUrl}/${route}`
            axios.get(endpoint)
                .then(result => {
                    setBucketList([...result.data])
                })
                .catch(err => console.log(err))
        }
        , [])

    // PUT - UPDATE
    const clickHandler = (event) => {
        let route = `api/bucket/${event.target.id}`
        let endpoint = `${baseUrl}/${route}`
        let options = {
            method: "put",
            url: endpoint
        }
        axios(options)
            .then(result => {
                console.log("Front end update result: ", result.data)
                let copyOfBucketList = [...bucketList]
                let requestedItem = copyOfBucketList.find(item => {
                    // -0 converts to number by default
                    return item.id === event.target.id-0
                })
                // if an item was found, flip its isComplete
                if(requestedItem) {
                    requestedItem.isComplete = !requestedItem.isComplete;
                }
                // replace original state with the copy
                setBucketList(copyOfBucketList);
            })
            .catch(err => {
                console.log(err)
            })

    };


    const deleteHandler = (bucketId) => {
        let route = `api/bucket/${bucketId}`
        let endpoint = `${baseUrl}/${route}`
        let options = {
            method: "delete",
            url: endpoint
        }
        axios(options)
            .then(result => {
                console.log("Delete result: ", result)
                let filteredBucketList = bucketList.filter(item =>{
                    return item.id !== bucketId
                })
                setBucketList(filteredBucketList)
            })
            .catch(err => {
                console.log("Error deleting from front end: ", err)
            })
    };

    let myList = bucketList.map((el)=>{
        return <li key={el.id}
                   className={el.isComplete ? "completed":  ""}
                   onClick={clickHandler}
                   id={el.id}
        >{el.description}
            <button
                onClick={evt => {
                    evt.stopPropagation()
                    deleteHandler(el.id)
                }}
            >Delete</button>
        </li>
    })

    const handleChange = (evt) => {
        setNewItem(evt.target.value)
    };


    // POST - CREATE
    const handleSubmit = (e) => {
        e.preventDefault();

        let item = {
            description: newItem,
            isComplete: false
        }

        let route = "api/bucket"
        let endpoint = `${baseUrl}/${route}`
        let options = {
            method: "post",
            url: endpoint,
            data: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log("data on front end: ", options.data)
        axios(options)
            .then(result => {
                console.log("Front end result: ", result)
                let newItem = result.data
                // let newArray = [...bucketList, newItem]
                setBucketList([...bucketList, newItem])
                // DO NOT do this!!!!!
                // do not mutate state directly
                // let newArray2 = bucketList.push(newItem)
                setNewItem("")
            })
            .catch(err => {
                console.log(err)
            })

    };

    return (
        <>
            <h1>Bucketlist!</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <br/>
                <label >What do you want to do before you kick thew bucket?
                    <br/>
                    <input
                        type="text"
                        name="newItem"
                        onChange={handleChange}
                        value={newItem}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
            <ul>
                {myList}
            </ul>
        </>

    )
}

export default App



