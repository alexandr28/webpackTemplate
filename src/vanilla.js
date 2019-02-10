import "./css/main.css";
import "./scss/main.scss";
import logo from "./img/js-logo.png";
/*
import "./fonts/Chalet.eot";
import "./fonts/Chalet.svg";
import "./fonts/Chalet.ttf";
import "./fonts/Chalet.woff";*/
import data from "./data.json";

console.log("hola  webpack");

var app = document.getElementById("app"),
  titulo = document.createElement("h1"),
  image = document.createElement("img");
titulo.textContent = "Bienvenidos a Webpack vanilla ";
image.src = logo;
app.appendChild(titulo);
app.appendChild(image);

console.log(data);
