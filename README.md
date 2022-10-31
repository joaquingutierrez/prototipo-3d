# Prototipo 3D - E-Commerce de impresiones 3D

Este Proyecto se trata de un e-commerce de impresiones 3D hecho con React JS. Cuyo objetivo es el de aprender a utilizar esta librería.

Link: https://prototipo-3d.vercel.app/

Posee tres categorías en las cuales se puede navegar. Posee nueve articulos (tres por categoría).

Haciendo click en más detalles del producto, se puede acceder a una vista más detallada del mismo donde se encuentra también un componente para elegir la cantidad deseada y un botón para agregar al carrito.

Haciendo click en "Acceder" se puede iniciar sesión através de Google, haciendo esto se puede acceder a dos características: la primera es la posibilidad de poder agregar productos a la lista de deseados (para esto se debe entrar a detalles del producto y hacer click en el corazon); la segunda es poder guardar los IDs de compra en un arreglo para poder visualizarlos y almacenarlos más fácilmente. Para cerrar sesión solamente hay que entrar en "Detalles" y hacer click en el botón "Cerrar sesión".

Si se agrega un producto a la lista de deseados, la única manera de borrarlo es entrando a "Detalles" y "Eliminar de favoritos".

Ingresar con un usuario de Google no es obligatorio, se puede realizar las compras sin acceder. Al hacer esto sólo habrá que llenar un formulario con datos como: nombre y apellido, télefono, email y confirmación de email. Acto seguido se genera el ID de compra y el usuario deberá guardarlo manualmente.

En la página principal se encuentra un input para poder consultar las compras poniendo el ID de compra. Esto lleva a un componente donde se puede visualizar los productos comprados, la cantidad y el precio. Si el usuario realizó la compra habiendo iniciado sesión en Google, se puede acceder a "Detalles" y en esta sección se puede acceder a los IDs de compra, y hacer click en ellos para ver sus detalles.

El sitio cuenta con un buscador, funciona poniendo palablas clase como el nombre completo del producto o una parte de él (pero deben ser palabras completas). El buscador no distingue entre mayúsculas y minúsculas. 

Se utiliza las siguientes dependecias:
* React-Bootstrap para traer ciertos componentes como, NavBar, Card y Spinner; y ayudar a dar estilo al sitio.
* React-Router-Dom para poder crear las rutas, evitando así tener que recargar la página entera cada vez que se desea realizar un cambio.
* Material UI para poder incorporar el ícono del carrito y los íconos del corazon vacío y del corazón relleno.
* Firebase para poder utilizar una base de datos de Firestore y además para poder usar el servicio de autentificación para que el usuario pueda acceder con su email de Google
* Sweetalert para poder utilizar alerts sin detener la ejecución del código
