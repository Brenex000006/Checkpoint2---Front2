document.body.innerHTML += "<h1>JSON Card</h1>";

document.body.innerHTML += "<input class='input3' id='url1' (type=text, placeholder='Place your JSON URL')></input>";

document.body.innerHTML += "<button class='button1' onclick='fetching()' id='btn'>Submit</button>";

//Criando as variaveis do card
let elements = 0

let input3 = ""
document.getElementById("url1").value = "https://jsonplaceholder.typicode.com/todos/";


function fetching() {

    input3 = document.getElementById("url1").value

    let cardSection = document.querySelector('.card');


    fetch(input3)
        .then(t => t.json())
        .then(t => {
            for (campo in t) {
                if (t[campo].completed) {
                    cardSection.insertAdjacentHTML('beforeend',
                        `<div class=iframe-container>
                        <p>${Object.keys(t[campo])[0]}: ${t[campo].userId}</p>
                        <p><strong>${Object.keys(t[campo])[1]}: ${t[campo].id}</strong></p>
                        <p><s>${Object.keys(t[campo])[2]}: ${t[campo].title}</s></p>
                        <p>${Object.keys(t[campo])[3]}: ${t[campo].completed}</p>
                        </div>`
                    )
                } else {
                    cardSection.insertAdjacentHTML('beforeend',
                        `<div class=iframe-container>
                        <p>${Object.keys(t[campo])[0]}: ${t[campo].userId}</p>
                        <p><strong>${Object.keys(t[campo])[1]}: ${t[campo].id}</strong></p>
                        <p><strong>${Object.keys(t[campo])[2]}: ${t[campo].title}</strong></p>
                        <p>${Object.keys(t[campo])[3]}: ${t[campo].completed}</p>
                        </div>`
                    )
                }
            }
        })
        
        
}