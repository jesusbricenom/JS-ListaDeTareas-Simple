import AgregarTarea from "./componentes/agregar-tarea.js";

export default class Vista {

    constructor() {
        this.modelo = null;
        this.componenteAgregarTarea = new AgregarTarea();
        this.listado = document.getElementById("listado");

        this.componenteAgregarTarea.onClick((texto) => this.agregarTarea(texto));
    }

    configurarModelo(modelo) {
        this.modelo = modelo;
    }

    renderizar() {
        const tareas = this.modelo.obtenerTareas();
        for(const tarea of tareas) {
            this.crearListado(tarea);
        }
    }

    agregarTarea(texto) {
        const tarea = this.modelo.agregarTarea(texto);
        this.crearListado(tarea);
    }

    eliminarTarea(id) {
        this.modelo.eliminarTarea(id);
        document.getElementById(id).remove();
    }

    crearListado(tarea) {
        const elementoDeLaLista = document.createElement("li");
        const botonEleminar = document.createElement("span");

        elementoDeLaLista.setAttribute("id", tarea.id);
        elementoDeLaLista.innerText = tarea.texto;
        this.listado.appendChild(elementoDeLaLista);
        botonEleminar.innerText = " X";
        elementoDeLaLista.appendChild(botonEleminar);

        botonEleminar.addEventListener("click", () => this.eliminarTarea(tarea.id));
    }

}