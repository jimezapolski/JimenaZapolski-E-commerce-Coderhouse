const products = [
  // simulamos una respuesta de una API
  {
    id: 1,
    name: "Classic Brown Leather",
    category: "Leather",
    price: 2000,
    stock: 52,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl:
      "https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-01.jpg.webp",
  },
  {
    id: 2,
    name: "Bronze Sage Leather",
    category: "Leather",
    price: 5000,
    stock: 15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl:
      "https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-03.jpg.webp",
  },
  {
    id: 3,
    name: "Revolver Bronze Age",
    category: "Minimalist",
    price: 8000,
    stock: 51,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl:
      "https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-05.jpg.webp",
  },
  {
    id: 4,
    name: "Coronada Greyhound",
    category: "Minimalist",
    price: 3000,
    stock: 35,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageUrl:
      "https://hongo.themezaa.com/watch/wp-content/uploads/sites/10/2019/02/watch-home-feature-products-04.jpg.webp",
  },
];

export const mFetch = (pid) =>
  new Promise((res) => {
    // simular fetch
    //acciones.
    if (pid) {
      setTimeout(() => {
        res(pid ? products.find((product) => product.id === pid) : products);
      }, 1000);
    } else {
      setTimeout(() => {
        res(products);
      }, 1000);
    }
  });

  // export const mFetchOne = () =>
  // new Promise((res, rej) => {
  //   // simular fetch
  //   //acciones.
  //   const condition = true
  // if(condition){
  //     setTimeout(() => {
  //       res(products[0]);
  //     }, 1000);
  //   } else {
  //    rej('no existen los productos')
  //   }
  // });
