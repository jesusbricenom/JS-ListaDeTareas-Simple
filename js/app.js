import Modelo from "./modelo.js";
import Vista from "./vista.js";

document.addEventListener("DOMContentLoaded", () => {

    const modelo = new Modelo();
    const vista = new Vista();

    modelo.configurarVista(vista);
    vista.configurarModelo(modelo);

    vista.renderizar();

});