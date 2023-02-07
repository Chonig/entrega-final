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
    class auto {
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

    const autoUno = new auto (1,"img/focus.jpg","Ford","Focus", 2015, 89000, 2500000);
    const autoDos = new auto (2,"img/fiesta.jpg","Ford","Fiesta", 2017, 49000, 3500000);
    const autoTres = new auto (3,"img/raptor.jpg","Ford","Raptor", 2021, 5000, 15500000);
    const autoCuatro = new auto (4,"img/maverick.jpg","Ford","Maverick", 2023, 0, 22000000);
    const autoCinco = new auto (5,"img/mondeo.jpg","Ford","Mondeo", 2010, 189000, 2000000);
    const autoSeis = new auto (6,"img/f100.jpg","Ford","F100", 1998, 389000, 1000000);
    const autoSiete = new auto (7,"img/mustang.jpg","Ford","Mustang", 2020, 5000, 30000000);
    const autoOcho = new auto (8,"img/ranger.jpg","Ford","Ranger", 2019, 100000, 10000000);


//Array de productos

    const Vehiculos = [autoUno,autoDos,autoTres,autoCuatro,autoCinco,autoSeis,autoSiete,autoOcho];


//Array vacio para el carrito de compras

    let carrito = [];


    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }


//Llamo a Rafa para acceder dinámicamente al HTML

    const contenedorAutos = document.getElementById("contenedorAutos");

//Mostramos el carrito de compras

const listaProductos =() => {
        Vehiculos.forEach( auto => {
            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                                <div class="card">
                                    <img src= "${auto.img}" class="card-img-top imgVehiculos" alt=" ${auto.marca," " + auto.modelo}">
                                    <div class="card-body">
                                        <h5>$autoo.marca}</h5>
                                        <p>Modelo: ${auto.modelo}</p>
                                        <p>Kilómetros: ${auto.kilometros}km</p>
                                        <p>Año: ${auto.año}</p>
                                        <p>Precio: $${auto.precio}</p>
                                        <button class="btn colorBoton" id="boton${auto.id}">Agregar al Carrito </button>
                                    </div>
                                </div>
                            `
    // Aviso de que el vehiculo fue agregado con éxito

        contenedorAutos.appendChild(card);
        const boton = document.getElementById(`boton${auto.id}`);
        boton.addEventListener("click", () => {
            Swal.fire("Vehiculo agregado con éxito");
            agregarVehiculo(auto.id);
        })
    })
}


listaProductos();
// Función para agregar al carrito de compras

const agregarVehiculo = (id) => {
    const vehiculoAgregado = carrito.find(auto => auto.id === id);
    if(vehiculoAgregado){
        vehiculoAgregado.cantidad++;
    } else {
        const auto = Vehiculos.find(auto => auto.id === id);
        carrito.push(auto); 

    localStorage.setItem("carrito",JSON.stringify(carrito));
}
    calcularTotal();
    
}


// Mostrar Carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () =>{
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML= "";

    carrito.forEach( auto => {
    const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML =    `
                                <div class="card">
                                    <img src= "${auto.img}" class="card-img-top imgVehiculos" alt=" ${auto.marca," " + auto.modelo}">
                                    <div class="card-body">
                                        <h5>${auto.marca}</h5>
                                        <p>Modelo: ${auto.modelo}</p>
                                        <p>Kilómetros: ${auto.kilometros}km</p>
                                        <p>Año: ${auto.año}</p>
                                        <p>Precio: $${auto.precio}</p>
                                        <p>Cantidad: ${auto.cantidad}</p>
                                        <button class="btn colorBoton" id="eliminar${auto.id}">Eliminar Vehiculo</button>
                                    </div>
                                </div>
                                `
    contenedorCarrito.appendChild(card);

    const boton = document.getElementById(`eliminar${auto.id}`);
    boton.addEventListener("click", () => {
        Swal.fire("Vehiculo Eliminado del carrito");
        eliminarVehiculo(auto.id);
        })
    })
    calcularTotal();
}

const eliminarVehiculo = (id) => {
    const auto = carrito.find(auto => auto.id === id);
    const indice = carrito.indexOf(auto);
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
    carrito.forEach(auto => {
        totalCompra += auto.precio * auto.cantidad;
    
    })
    total.innerHTML = `Total: $${totalCompra}`;
}


const apiCripto = "https://criptoya.com/api/dolar";

const apiDolar = document.getElementById("apiDolar");

setInterval(()=>{
    fetch(apiCripto)
        .then(response => response.json())
        .then(({blue , ccb , ccl , mep , oficial , solidario}) =>{
            
            apiDolar.innerHTML= `
            <div class="tituloapi">
                <h2>Tipos de Dolar: </h2>
            </div>
            <div class="dolares"><p>Dolar Oficial: ${oficial}</p>
                <p class="apiDolar">Dolar Solidario : ${solidario}</p>
                <p class="apiDolar">Dolar Mep: ${mep}</p>
                <p class="apiDolar">Dolar Ccb: ${ccb}</p>
                <p class="apiDolar">Dolar Blue: ${blue}</p>
                <p class="apiDolar">Dolar Ccl: ${ccl}</p>
            </div>
            `
        })
        .catch( error => console.error(error))

}, 1000)


