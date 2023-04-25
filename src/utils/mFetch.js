let productos = [
    {id : '1', categoria:'cafe', name: "Cafe Negro", stock: 50, price: 370, foto: "https://img.freepik.com/foto-gratis/vista-lateral-cafe-taza-blanca-granos-cafe-aislado-sobre-fondo-blanco-madera_141793-27365.jpg?size=626&ext=jpg&ga=GA1.1.1531589289.1675213329&semt=robertav1_2_sidr"},
    {id : '2', categoria:'cafe', name: "Cafe Especial", stock: 50, price: 600, foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90LwdalsrLzc8qd9n4vWpeKH8wPlfnG5fiQ&usqp=CAU"},
    {id : '3', categoria:'combos', name: "Cafe con torta", stock: 50, price: 700, foto: "https://img.freepik.com/foto-gratis/mujer-que-bebe-cappuccino-que-come-torta_1262-5934.jpg?size=626&ext=jpg&ga=GA1.1.1531589289.1675213329&semt=robertav1_2_sidr" },
    {id : '4', categoria:'combos', name: "Cafe con galletas", stock: 50, price: 800, foto: "https://img.freepik.com/foto-gratis/cafe-alto-angulo-galletas_23-2148229151.jpg?size=626&ext=jpg&ga=GA1.1.1531589289.1675213329&semt=robertav1_2_sidr"},
  ]
export const mFetch = (id) => {
    return new Promise ((res,rej) => {
      setTimeout(()=> {
        res(!id ? productos : productos.find(producto => producto.id === id))
      }, 1000)
    })
  }
