// // a b topla * c
// // c b bol * a

// function topla(a, b, c) {
//     let x = (a + b * c)
//     let y = (c / b * a)
//     console.log(x)
//     console.log(y)
// }
// topla(2, 2, 2)






// a b c topla 
// netice vur d

// function topla(a, b, c, d) {
//     let x = (a + b + c)
//     let y = (x * d)
//     console.log(x, y)
//         // console.log(y)
// }
// topla(2, 2, 2, 2)



// 1-100
// if (a < 1 && a <= 100)
// function tekrar(a) {

//     if (a > 500) {
//         return
//     }
//     if (a % 5 == 0) {
//         console.log(a)
//     }

//     tekrar(++a)

// }

// tekrar(1)




// 1-1000 7 qaliqli bolunen a=1
// function tekrar(a) {
//     if (a > 1000) {
//         return
//     }
//     if (a % 7 == 1) {
//         console.log(a)
//     }
//     tekrar(++a)
// }
// tekrar(1)




// 20 qeder butun ededlerin ayri-ayri sertlerle tek ve cut olaraq goster (alert) 
function tekrar(a) {
    if (a > 20) {
        return
    }
    // if (a % 2 == 0) {
    //     alert(a)
    // }
    if (a % 2 == 1) {
        alert(a)
    }
    tekrar(++a)
}
tekrar(1)