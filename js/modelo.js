export default class Modelo {

    constructor() {
        this.vista = null;
        this.tareas = JSON.parse(localStorage.getItem("tareas"));
        if(!this.tareas || this.tareas.length < 1) {
            this.tareas = [
                {
                    id: 0,
                    texto: "Escribe lo que quieras!"
                }
            ]
        this.id = 1;
        } else {
            this.id = this.tareas[this.tareas.length - 1].id + 1;
        }
    }

    configurarVista(pVista) {
        this.vista = pVista;
    }

    obtenerTareas() {
        return this.tareas;
    }

    agregarTarea(texto) {
        const tarea = {
            id: this.id++,
            texto
        }

        this.tareas.push(tarea);
        console.log(this.tareas);

        //Forma boomer
        //return Object.assign({}, tarea);

        this.guardar();

        //Forma crack cyberpunk hacker vergatario 2024 xD
        return {...tarea};
    }

    eliminarTarea(id) {
        const indice = this.tareas.findIndex((tarea) => tarea.id === id);
        this.tareas.splice(indice, 1);
        console.log(this.obtenerTareas());
        this.guardar();
    }

    guardar() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }

}