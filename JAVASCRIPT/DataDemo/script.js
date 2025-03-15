let form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let username=document.getElementById("userName").value
    let password=document.g
    let person={
        username: document.getElementById("userName").value,
        password: document.getElementById("pw").value,
        areMarried: document.querySelector('input[name="isMarried"]:checked').value
    }
    console.log(event)
    let str=JSON.stringify(person)
})