let inpNombre = document.getElementById('nom');
let inpCel = document.getElementById('cel');

let contacto = [];

let btnAgregar = document.getElementById('btnAgregar');

btnAgregar.addEventListener('click', function () {
    let nombreV = inpNombre.value;
    let celularV = inpCel.value;
    let nuevoContacto = {
        nombre: nombreV,
        telefono: celularV
    };
    contacto.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contacto));

    inpNombre.value = '';
    inpCel.value = '';
});

let btnMostrar = document.getElementById('btnMostrar');
let list = document.getElementById('lista');

btnMostrar.addEventListener('click', function () {
    list.innerHTML = '';

    let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

    contactosGuardados.forEach(contacto => {
        list.innerHTML += `<li>${contacto.nombre}, ${contacto.telefono}</li>`;
    });

    let botonesEliminar = document.getElementsByClassName('btnEliminar');
    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function(){
            let index = this.getAttribute('data-index');
            eliminarContacto(index);
        });
    }

});

let btnEliminar = document.getElementById('btnEliminar');
let listContactos = JSON.parse(localStorage.getItem("contactos")) || [];

btnEliminar.addEventListener('click', function () {
    if (listContactos.length > 0) {
        listContactos.pop();
        localStorage.setItem("contactos", JSON.stringify(listContactos));
        btnMostrar.click();
    }
});

let btnModificar = document.getElementById('btnModificar');
let listContactosG = JSON.parse(localStorage.getItem("contactos")) || [];

btnModificar.addEventListener('click', function () {
   
    let index = parseInt(document.getElementById('indice').value);
    let nuevoNombre = document.getElementById('nuevoNombre').value;
    let nuevoCel = document.getElementById('nuevoCel').value;

    if (index >= 0 && index < listContactos.length) {
        listContactos[index].nombre = nuevoNombre;
        listContactos[index].email = nuevoCel;
        localStorage.setItem("contactos", JSON.stringify(listContactos));
        mostrarContactos();
    }
});
