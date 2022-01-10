let a = document.querySelectorAll("a")
let tr = document.querySelectorAll(".tr__class")

function getUserData(event) {

    event.preventDefault()
    let table = document.querySelector('table')
    let ad = document.querySelector('input[name=ad]').value
    let soyad = document.querySelector('input[name=soyad]').value
    let email = document.querySelector('input[name=email]').value
    let date = document.querySelector('input[name=date]').value
    table.innerHTML += ` 
    <tr class="tr__class">
                <td>${ad}</td>
                <td>${soyad}</td>
                <td>${email}</td>
                <td>${date}</td>
                <td><a href='#' onclick="anima(event)" >Sil</a></td>
               
            </tr>`;




}
for (let i = 0; i <= tr.length; i++) {

    function anima(event) {

        if (a[i] == tr[i]) {
            event.target.parentElement.parentElement.remove()
        }


    }
}