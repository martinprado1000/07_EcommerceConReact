const products = [
  {
    id: "1",
    name: "Celular Samsung",
    price: "1500",
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a245mzkoaro/gallery/ar-galaxy-a24-sm-a245-sm-a245mzkoaro-thumb-536812898?$344_344_PNG$",
    stock: 10,
    description: "Descricion de Samsung",
  },
  {
    id: "2",
    name: "Celular Iphone 18",
    price: "3000",
    category: "celular",
    img: "https://www.apple.com/newsroom/images/2024/06/ios-18-makes-iphone-more-personal-capable-and-intelligent-than-ever/article/Apple-WWDC24-iOS-18-Control-Center-240610_inline.jpg.large.jpg",
    stock: 8,
    description: "Descricion de Iphon 18",
  },
  {
    id: "3",
    name: "Celular LG",
    price: "1100",
    category: "celular",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjspYfzIt4SHwFpiFmAa-k3MMpXKZpjM6y9A&s",
    stock: 21,
    description: "Descricion de LG",
  },
];

export const getProducts = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(products)
        },3000)
    })
};
