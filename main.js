/* /** Bloque de la Segunda Entrega **/

/* class Usuario {
    constructor(nombre,apellido,telefono,mail,nombreUsuario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.mail = mail;
    this.nombreUsuario= nombreUsuario
    
    }
}

const usuarioUno = new Usuario("Cristian", "Hönig", 1234567891, "cristian@gmail.com", "Crish");
const usuarioDos = new Usuario("Carlos", "Calvo", 1010101025,"carloscalvo@gmail.com", "Carlin");
const usuarioTres = new Usuario("Pepe","Argento",0303456111,"pepeargento@gmail.com", "Pepito");

const arrayUsuarios = [];


arrayUsuarios.push(usuarioUno);
arrayUsuarios.push(usuarioDos);
arrayUsuarios.push(usuarioTres);

console.log(arrayUsuarios);


function menu(){
    alert("¡Bienvenido al carrito de compras de autos!");
    let opcion = parseInt(prompt("Ingrese la opción deseada: \n 1) ingrese un usuario \n 2) consulta de usuario \n 3) eliminar usuario  \n 4) Ingresar al carrito"))
    return opcion

}


function ingresarUsuario (){
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let telefono = parseInt(prompt("Ingrese su teléfono: "));
    let mail = prompt("Ingrese su mail: ");
    let nombreUsuario = prompt("Ingrese su nombre de Usuario: ");
    let usuario = new Usuario(nombre,apellido,telefono,mail,nombreUsuario);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
}

function consultaUsuario(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let usuario = arrayUsuarios.find( usuario => usuario.nombreUsuario === nombreUsuario);
    console.log(usuario);
    console.log(arrayUsuarios);

}

function eliminarUsuario(){
    let nombreUsuario = prompt("Ingrese su nombre de Usuario: ");
    let usuario = arrayUsuarios.find(usuario => usuario.nombreUsuario === nombreUsuario);
    let indice = arrayUsuarios.indexOf(usuario);
    arrayUsuarios.splice(indice,1);
    console.log(arrayUsuarios);
}


function salir(){
    alert ( "Tu próximo auto aqui!" );
}


let opcion = menu();
switch(opcion){
    case 1:
        ingresarUsuario();
        break

    case 2:
        consultaUsuario();
        break

    case 3:
        eliminarUsuario();
        break

    case 4:
        salir();
        break
} */


/** Bloque de la Tercera Entrega **/

//Defino la clase de los productos que voy a incluir en el carro de compras
    class Auto {
        constructor(id,img,marca,modelo,año,kilometros,precio){
            this.id = id;
            this.img = img;
            this.marca = marca;
            this.modelo = modelo;
            this.año = año;
            this.kilometros = kilometros;
            this.precio = precio;
            this.cantidad = 1;
        }
        
    }


// Defino 5(cinco) productos para el carro el de compras

    const autoUno = new Auto (1,"img/focus.jpg","Ford","Focus", 2015, 89000, 2500000);
    const autoDos = new Auto (2,"img/fiesta.jpg","Ford","Fiesta", 2017, 49000, 3500000);
    const autoTres = new Auto (3,"img/raptor.jpg","Ford","Raptor", 2021, 5000, 15500000);
    const autoCuatro = new Auto (4,"img/maverick.jpg","Ford","Maverick", 2023, 0, 22000000);
    const autoCinco = new Auto (5,"img/mondeo.jpg","Ford","Mondeo", 2010, 189000, 2000000);
    const autoSeis = new Auto (6,"img/f100.jpg","Ford","F100", 1998, 389000, 1000000);
    const autoSiete = new Auto (7,"img/mustang.jpg","Ford","Mustang", 2020, 5000, 30000000);
    const autoOcho = new Auto (8,"img/ranger.jpg","Ford","Ranger", 2019, 100000, 10000000);


//Array de productos

    const Vehiculos = [autoUno,autoDos,autoTres,autoCuatro,autoCinco,autoSeis,autoSiete,autoOcho];


//Array vacio para el carrito de compras

    let carrito = [];


    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }


//Llamo a Rafa para acceder dinámicamente al HTML

    const Productos = document.getElementById("Productos");

//Mostramos el carrito de compras

const listaProductos =() => {
        Vehiculos.forEach( vehiculo => {
            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                                <div class="card">
                                    <img src= "${vehiculo.img}" class="card-img-top imgVehiculos" alt=" ${vehiculo.marca," " + vehiculo.modelo}">
                                    <div class="card-body">
                                        <h5>${vehiculo.marca}</h5>
                                        <p>Modelo: ${vehiculo.modelo}</p>
                                        <p>Kilómetros: ${vehiculo.kilometros}km</p>
                                        <p>Año: ${vehiculo.año}</p>
                                        <p>Precio: $${vehiculo.precio}</p>
                                        <button class="btn colorBoton" id="boton${vehiculo.id}">Agregar al Carrito </button>
                                    </div>
                                </div>
                            `
    // Aviso de que el vehiculo fue agregado con éxito

        Productos.appendChild(card);
        const boton = document.getElementById(`boton${vehiculo.id}`);
        boton.addEventListener("click", () => {
            alert("Vehículo agregado con éxito");
            agregarVehiculo(vehiculo.id);
        })
    })
}


listaProductos();
// Función para agregar al carrito de compras

    const agregarVehiculo = (id) => {
        const vehiculoAgregado = carrito.find(vehiculo => vehiculo.id === id);
        if(vehiculoAgregado){
            vehiculoAgregado.cantidad++;
        } else {
            const vehiculo = Vehiculos.find(vehiculo => vehiculo.id === id);
            carrito.push(vehiculo); 
        }

        if(localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"));
}
}


// Mostrar Carrito de compras

const contenedorCarrito = document.getElementById("contendorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML= "";
    carrito.forEach( vehiculo => {
        const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                                <div class="card">
                                    <img src= "${vehiculo.img}" class="card-img-top imgVehiculos" alt=" ${vehiculo.marca," " + vehiculo.modelo}">
                                    <div class="card-body">
                                        <h5>${vehiculo.marca}</h5>
                                        <p>Modelo: ${vehiculo.modelo}</p>
                                        <p>Kilómetros: ${vehiculo.kilometros}km</p>
                                        <p>Año: ${vehiculo.año}</p>
                                        <p>Precio: $${vehiculo.precio}</p>
                                        <p>Cantidad: ${vehiculo.cantidad}</p>
                                        <button class="btn colorBoton" id="eliminar${vehiculo.id}">Eliminar Vehiculo</button>
                                    </div>
                                </div>
                            `
    contenedorCarrito.appendChild(card);
    const boton = document.getElementById(`eliminar${vehiculo.id}`);
    boton.addEventListener("click", () =>{
        eliminarVehiculo(vehiculo.id);
        })
    })
    calcularTotal();
}

const eliminarVehiculo = (id) => {
    const vehiculo = carrito.find(vehiculo => vehiculo.id === id);
    const indice = carrito.indexOf(vehiculo);
    carrito.splice(indice, 1);
    mostrarCarrito();


    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})
    

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    localStorage.clear();
}


const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(vehiculo => {
        totalCompra += vehiculo.precio * vehiculo.cantidad;
    
    })
    total.innerHTML = `Total: $${totalCompra}`;
}


