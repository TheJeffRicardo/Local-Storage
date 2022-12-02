let people = []
let submit = document.querySelector('#submit')
let display = document.querySelector('#display')

// Add event listener
submit.addEventListener('click', (e)=>{
    e.preventDefault()
    let firstName = document.querySelector('#firstName').value
    let surname = document.querySelector('#surname').value
    let email = document.querySelector('#email').value
    people.push({
        firstName,
        surname,
        email
    })
    localStorage.setItem('data', JSON.stringify(people))
})

display.addEventListener('click', (e)=>{
    e.preventDefault()
    console.table(
        JSON.parse(localStorage.getItem('data'))
    )
})