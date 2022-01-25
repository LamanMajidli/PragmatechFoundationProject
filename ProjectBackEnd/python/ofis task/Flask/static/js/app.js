// Mousemove hissesi


// var krug = document.querySelector(".krug")
// var tochka = document.querySelector(".tochka")
// document.addEventListener("mousemove", function(e) {
//     krug.style.cssText = tochka.style.css.Text = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
// });

// function followMouse(e) {
//     console.log(e)

//     let krug = document.querySelector('.krug')
//     krug.style.left = `${e.clientX}px`
//     krug.style.top = `${e.clientY}px`
// }

// let leftPos = 0;
// let topPos = 0;
// document.body.addEventListener('keydown', function(e) {
//     let krug = document.querySelector('.krug')
//     krug.style.left = `${e.clientX}px`
// })


// Category hissesi


// categories = ['All', 'Vimeo', 'Youtube', 'Soundcloud', 'Image', 'Detail']
// sekiller = [{
//         sekil: '8.jpg',
//         category: categories[0],
//     },
//     {

//         sekil: '7.jpg',
//         category: categories[1]
//     },
//     {

//         sekil: '6.jpg',
//         category: categories[2]
//     },
//     {

//         sekil: '5.jpg',
//         category: categories[3]
//     },
//     {

//         sekil: '4.jpg',
//         category: categories[4]
//     },
//     {

//         sekil: '3.jpg',
//         category: categories[5]
//     }
// ]
// let nav = document.querySelector('.category-list')
// let news = document.querySelector('.category-container')

// for (let category of categories) {
//     nav.innerHTML += `<li onclick="allPhotos(this)">${category}</li>`
// }

// for (let sekil of sekiller) {
//     news.innerHTML += `

//     <div class="news-item">
//             <img src="${sekil}" alt="">

//         </div>
//     `
// }

// function allPhoto(elem) {
//     let catName = elem.innerHTML;
//     news.innerHTML = ""
//     for (let sekil of sekiller) {
//         if (sekil.category == catName) {
//             news.innerHTML += `

//         <div class="news-item">
//                 <img src="${sekil}" alt="">
//             </div>
//         `
//         }
//     }
// }

// function allPhoto() {
//     for (let sekil of sekiller) {
//         news.innerHTML += `

//         <div class="news-item">
//                 <img src="${sekil}" alt="">

//             </div>
//         `
//     }
// }