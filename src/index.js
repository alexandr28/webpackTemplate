import "./css/main.css";
import "./scss/main.scss";
import logo from "./img/webpack-logo.svg";
import data from "./data.json";

console.log("hola  webpack");

var app = document.getElementById("app"),
  titulo = document.createElement("h1"),
  image = document.createElement("img");
titulo.textContent = "Bienvenidos a Webpack 1 2 3";
image.src = logo;
app.appendChild(titulo);
app.appendChild(image);

console.log(data);
