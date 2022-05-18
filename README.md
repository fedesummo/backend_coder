# Coderhouse - Backend (NodeJS)

### Introducción al proyecto.
La presente API tiene objetivo funcionar como backend de una tiende ecommerce, por lo que permitirá trabajar con productos y carritos.

### Ejecución de la aplicación.
Para ejecutar la API de forma local, primero es necesario clonar el presente repositorio utilizando el comando `git clone https://github.com/fedesummo/backend_coder`. Luego, se debe ingresar a la carpeta del proyecto e instalar las depedencias con `npm i`. La aplicación puede ejecutarse con `npm start` o  `npm run dev` si se desea ejecutarla en modo de desarrollo.

### Endpoints.
Se listarán debajo todos los endpoints disponibles en la aplicación junto con una breve descripción de cada uno.
Los endpoints señalados con la marca *(admin)* serán accesibles solo para usuarios administradores. Para indicar que el usuario es adminstrador, basta con enviar en el encabezado de la solicitud la propiedad `admin` con valor `true`.

**- Productos -**
GET `/api/products`  
Devuelve un array con los datos de todos los productos registrados, cada uno de ellos en forma de objeto.

GET `/api/products/:productId`  
Devuelve un array con los datos del producto solicitado en forma de objeto.

POST `/api/products` *(admin)*  
Permite registrar un nuevo producto. Para ello deben enviarse en formato JSON las propiedades correspondientes, en el cuerpo de la solicitud.

PUT `/api/products/:productId` *(admin)*  
Permite actualizar los datos del producto indicado mediante ID. Deben enviarse en formato JSON las nuevas propiedades del producto en el cuerpo de la solicitud.

DELETE `/api/products/:productId` *(admin)*  
Permite eliminar el producto indicado por ID de los registros. 

*Sugerencia: registrar nuevos productos utilizando el siguiente formato JSON.*

{  
    "name": "...",  
    "description": "...",  
    "code": "...",  
    "img-url": "...",  
    "price": "...",  
    "stock": "..."  
}

**- Carritos -**
POST `/api/carts`  
Permite registrar un nuevo carrito.  

DELETE `/api/carts/:cartId`  
Permite eliminar el carrito indicado mediante ID.  

GET `/api/carts/:cartId/products`  
Devuelve un array con todos los productos agregados al carrito indicado por ID.

POST `/api/carts/:cartId/products`  
Permite registrar un nuevo producto en el carrito indicado por ID. El ID del producto que se desea añadir debe ser enviado en el cuerpo de la solicitud.

*Ejemplo:*  

{  
    "productId": "..."  
}

DELETE `/api/carts/:cartId/products/:productId`  
Permite eliminar el producto indicado por ID del carrito indicado por ID.
