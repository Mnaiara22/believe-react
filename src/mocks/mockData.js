const productos = [
    {id:1, name: "Nala", price: 290, measure: "80cc", linea: "Clásica", img:'/images/nala.avif', stock: 10},
    {id:2, name: "Kala", price: 380, measure: "150cc", linea: "Clásica", img:'/images/kala.avif', stock: 8},
    {id:3, name: "Anna ", price: 590, measure: "360cc", linea: "Clásica", img:'/images/anna.avif', stock: 13},
    {id:4, name: "Bella", price: 795, measure: "150cc", linea: "Romántica", img:'/images/bella.avif', stock: 15},
    {id:5, name: "Duquesa", price: 865, measure: "100cc", linea: "Romántica", img:'/images/duquesa.avif', stock: 7},
    {id:6, name: "Lilo ", price: 805, measure: "200cc", linea: "Romántica", img:'/images/lilo.avif', stock: 3},
    {id:7, name: "Ariel", price: 1350, measure: "100cc", linea: "Romántica", img:'/images/ariel.avif', stock: 11},
    {id:8, name: "Ursula", price: 955, measure: "250cc", linea: "Romántica", img:'/images/ursula.avif', stock: 10},
    {id:9, name: "Esmeralda ", price: 1450, measure: "200cc", linea: "Romántica", img:'/images/esmeralda.avif', stock: 5},
    {id:7, name: "Wendy", price: 600, measure: "80cc", linea: "Moderna", img:'/images/wendy.avif', stock: 2},
    {id:8, name: "Apagavelas", price: 400, measure: "", linea: "Moderna", img:'/images/apagavelas.avif', stock: 6},
    {id:9, name: "Arendelle ", price: 990, measure: "230cc", linea: "Moderna", img:'/images/arendelle.avif', stock: 3},
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

