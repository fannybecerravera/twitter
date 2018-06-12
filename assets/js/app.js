const boton = document.getElementById('btn');
boton.addEventListener('click', () => {
 //acá guardo el comentario ingresado por el usuario
 let comments = document.getElementById('mensaje').value;
//contenedor donde dejare mis comentarios en html
const cont = document.getElementById('cont');//cont padre mayor
//crar un div contenedor
const newComments = document.createElement('div');//div es hijo de cont padre mayor,  y asu vez div es padre de p
//nodos de texto del textarea
let textNewComment= document.createTextNode(comments); //texto es hijp de p nodo

const contenedorElemento = document.createElement('p'); //p es hijo de div
 contenedorElemento.appendChild(textNewComment);//p es hijo de div nodo
 newComments.appendChild(contenedorElemento);//div es hijo de cont padre mayor, y asu vez div es padre de p nodo
 cont.appendChild(newComments);// cont padre mayor nodo
});
