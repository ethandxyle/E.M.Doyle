//consume an API
//what are the rules
//free or credentials/permissions-FREE
//need to know endpoints: baseURL+route-Done
//How is the data being sent back-JSON or XML-JSON
//how much data is coming back and what does it look like-ONE thing possibly an object
const BASEURL = "https://dog.ceo/api"
let route = "breeds/image/random"
let endpoint = `${BASEURL}/${route}`

let button=document.getElementsByTagName("button")
button[0].addEventListener("click",()=>{
    //fetch skeleton
//utilize endpoint
    fetch(endpoint)
        .then(data => {
            //get data; if ok-parse it, else error handling
            console.log(data)
            if (data.ok){
                let result=data.json()
                return result
            }
            else{
                throw Error("Adam Helped so that's probably why its broke")
            }
        })
        .then(parsedData=>{
            let img=document.querySelector("img")
            console.log(parsedData)
            img.setAttribute("src",parsedData.message)
        })//deal with parsed data
        .catch(error=>{
            console.log(error)})//error handling
})

