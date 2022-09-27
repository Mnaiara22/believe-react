export const productos = [
    {name: "Kala", price: 380, measure: "150cc", linea: "clasica", img:'/images/kala.avif', stock: 8},
    {name: "Anna ", price: 590, measure: "360cc", linea: "clasica", img:'/images/anna.avif', stock: 13},
    {name: "Bella", price: 795, measure: "150cc", linea: "romantica", img:'/images/bella.avif', stock: 15},
    {name: "Duquesa", price: 865, measure: "100cc", linea: "romantica", img:'/images/duquesa.avif', stock: 7},
    {name: "Lilo ", price: 805, measure: "200cc", linea: "romantica", img:'/images/lilo.avif', stock: 3},
    {name: "Ariel", price: 1350, measure: "100cc", linea: "romantica", img:'/images/ariel.avif', stock: 11},
    {name: "Ursula", price: 955, measure: "250cc", linea: "romantica", img:'/images/ursula.avif', stock: 10},
    {name: "Esmeralda ", price: 1450, measure: "200cc", linea: "romantica", img:'/images/esmeralda.avif', stock: 5},
    {name: "Wendy", price: 600, measure: "80cc", linea: "moderna", img:'/images/wendy.avif', stock: 2},
    {name: "Apagavelas", price: 400, measure: "", linea: "moderna", img:'/images/apagavelas.avif', stock: 6},
    {name: "Arendelle ", price: 990, measure: "230cc", linea: "moderna", img:'/images/arendelle.avif', stock: 3},
]

export const data = new Promise((resolve, reject) => {
    
    let condition = true
        setTimeout(()=> {
            if(condition){
                resolve(productos)
            }else{
                reject('error')
            }

        },3000)

})

