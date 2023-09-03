const products = [ // simulamos una respuesta de una API
    {id: 1, name: 'Classic Brown Leather', price: 2000, stock: 52, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-01.jpg.webp'},
    {id: 2, name: 'Bronze Sage Leather', price: 5000, stock: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-01.jpg.webp'},
    {id: 3, name: 'Revolver Bronze Age', price: 8000, stock: 51, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-01.jpg.webp'},
    {id: 4, name: 'Coronada Greyhound', price: 3000, stock: 35, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-04.jpg.webp'}
]

export const mFetch  = () =>  new Promise((res,rej) => { // simular fetch
    //acciones.
    const condition = true
    if(condition){
        setTimeout(()=>{
            res(products)
        }, 3000)
    }else{
        rej('no se encontraron los productos')
    }
})
