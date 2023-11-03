// userCart.js

function addToCart(cid, pid) {
    const data = {
      cid: cid,
      pid: pid
    };
  
    fetch('/addtocart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
  
      // Actualizar la interfaz de usuario según la respuesta del servidor
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  // Otras funciones relacionadas con el carrito de compras
  
  // Exportar las funciones que quieras utilizar en otros archivos
  export { addToCart, /* otras funciones */ };