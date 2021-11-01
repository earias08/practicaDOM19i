function cambiarTitulo() {
  console.log("desde la funcion cambiar titulo");
  // buscar un elemento del html
  let tituloH1 = document.querySelector("#titulo");
  console.log(tituloH1);
  // modificar las propiedades del objeto
  tituloH1.innerHTML = "Titulo modificado";
  tituloH1.className = "text-warning";
}

const verMas = () => {
  console.log("desde la funcion ver mas");
  // obtener el elemento padre
  let contenedorPadre = document.querySelector("#contenedorPadre");
  let btnVerMas = document.querySelector("#btnVerMas");

  //aqui agrego mi pregunta
  if (btnVerMas.innerHTML == "Ver mas") {
    // opcion 1 - camino largo.
    // 1- crear el elemento del html
    // let parrafo = document.createElement('p'); // crea la etiqueta <p></p>
    // // 2- agregar la informacion al elemento del html
    // parrafo.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus dignissimos quibusdam pariatur. Architecto soluta alias quam, aliquid consequuntur veniam mollitia eum eveniet quaerat laboriosam porro enim temporibus sequi, corrupti neque. Eos optio accusamus iusto necessitatibus natus dolorem quia! Hic repellendus, culpa nisi nobis laboriosam facilis ducimus. Repellendus odio cum, officia praesentium, aut itaque sequi tempora iste consequatur atque harum rerum?';
    // parrafo.className = 'lead';
    // // 3- insertar el nuevo elemento en el DOM
    // contenedorPadre.appendChild(parrafo)

    //Opcion 2 - camino corto
    contenedorPadre.innerHTML +=
      '<p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, aliquid? Tenetur sint accusamus nobis quas molestiae, aliquid itaque consequuntur esse. Tempore possimus temporibus eum unde dolor ad dolore. Beatae quo aliquam placeat necessitatibus odio repellendus blanditiis perferendis modi esse amet sit autem ipsa tempora, nulla quis possimus accusamus ab harum illum provident ducimus quam sed! Porro qui nostrum quis suscipit.</p>';

    // modificar el texto del boton
    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-danger";
  } else {
    console.log("aqui quiero borrar el parrafo");
    console.log(contenedorPadre.hasChildNodes()); // devuelve true o false
    console.log(contenedorPadre.children.length); //retorna un arreglo de nodos hijos
    if(contenedorPadre.hasChildNodes() && contenedorPadre.children.length >= 2 ){
        //   borrar el parrafo
        contenedorPadre.removeChild(contenedorPadre.children[1]);
        // modificar el texto y la estetica del boton
        btnVerMas.innerHTML = 'Ver mas';
        btnVerMas.className = 'btn btn-primary';
    }

  }
};

// la propiedad para acceder al texto de un input no es innerHTML se llama value