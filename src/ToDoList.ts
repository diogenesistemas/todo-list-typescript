import  {Tarefa} from "./Tafera";
import  {Prioridade} from "./Prioridade";
import { Lista } from "./Lista";

export class ToDoList{

    private form : HTMLFormElement;
    private input : HTMLInputElement;
    private lista: Lista;

    constructor(elemento: HTMLElement) {
        console.log("Colocando OOOOOOOO!");
       this.form = elemento.querySelector('form');
    //    const input : HTMLInputElement = <HTMLInputElement>document.getElementById("tf_2do");
       this.input = elemento.querySelector('#tf_2do') 
       this.lista = new Lista();



       this.form.addEventListener(
        'submit', 
        (evt) => {
            evt.preventDefault();
            let t = new Tarefa(this.input.value, Prioridade.baixa);
            this.lista.addTarefa(t);
            console.log(this.lista);
    
        })
      
        
    }

}








