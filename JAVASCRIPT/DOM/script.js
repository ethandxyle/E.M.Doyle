let food= document.getElementById("fruit")
console.log(food)
food.style.color="red"
food.style.backgroundColor="green"
food.style.fontSize="50px"

let foods=document .getElementsByClassName("breakfast")
console.log(foods[1])

let foods2 =document.getElementsByTagName("fruit")
console.log(foods2[2])

// let food4=document.querySelector("#fruit")
// console.log("fruit")

let results=document.querySelectorAll("h1")
console.log(results[results.length-1])

let firstLi=document.querySelector("li")

// firstLi.querySelector("li").textContent="sold out!"

firstLi.innerHTML = "chocolate <b> Hazelnut cookies"

let answer=document.querySelector("a").getAttribute("href")
console.log(answer)

document.querySelector("a").setAttribute("href","https://www.amazon.com/")

let button= document.getElementsByTagName("button" )[0]
button[0].addEventListener("click",()=>{alert("clicked!!!")})
