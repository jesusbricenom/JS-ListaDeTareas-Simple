export default class AgregarTarea {

    constructor() {
        this.agregar = document.getElementById("agregar");
        this.texto = document.getElementById("texto");
        this.formulario = document.getElementById("formulario");
    }

    noEnviar() {
        this.formulario.addEventListener("submit", (evento) => evento.preventDefault());
    }

    onClick(callback) {
        this.agregar.onclick = () => {
            this.noEnviar();
            
            if (document.getElementById("texto").value === "") {
                alert("ESTA VACIO");
                return;
            } else {
                callback(this.texto.value);
                this.texto.value = "";
            }
        }
    }
    
}