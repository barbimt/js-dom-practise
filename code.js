let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

let completedData = false;
function obtenerDatosDelUsuario() {
  if (!completedData) {
    datosPersona.nombre = prompt("Ingresa tu nombre");
    datosPersona.edad = prompt("Ingresa el año en que naciste");
    datosPersona.edad = 2021 - datosPersona.edad;
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
    datosPersona.interesPorJs = confirm("Te interesa JavaScript?");
    completedData = true;
  } else {
    alert("Ya completaste tus datos!");
  }
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();

  const datos = document.querySelectorAll("span");

  for (const dato of datos) {
    switch (dato.id) {
      case "nombre":
        nombre.innerHTML += datosPersona.nombre;
        break;
      case "edad":
        edad.innerHTML += datosPersona.edad;
        break;
      case "ciudad":
        ciudad.innerHTML += datosPersona.ciudad;
        break;
      case "javascript":
        datosPersona.interesPorJs
          ? (javascript.innerHTML += "Si")
          : (javascript.innerHTML += "No");
        break;
      default:
        break;
    }
  }
}

let cardsAlreadyShowed = false;

function recorrerListadoYRenderizarTarjetas() {
  if (!cardsAlreadyShowed) {
    const cardsRow = document.querySelector("#fila");
    listado.forEach((cardInfo) => {
      cardsRow.innerHTML += `<div class="caja">  
        <img src=${cardInfo.imgUrl} alt=${cardInfo.lenguajes} />
        <br/>
        <p>Lenguajes: ${cardInfo.lenguajes}</p> 
        <br/>
        <p>Bimestre: ${cardInfo.bimestre}</p>
        </div>`;
    });
    cardsAlreadyShowed = true;
  }
}

function alternarColorTema() {
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

window.addEventListener("keypress", function (e) {
  if (e.key.toLowerCase() == "f") {
    document.querySelector("#sobre-mi").classList.remove("oculto");
    document.querySelector("small").classList.add("oculto");
  }
});
