import { Tarefa } from "./Tafera";
import { Prioridade } from "./Prioridade";
import { Lista } from "./Lista";

export class ToDoList {

    private form: HTMLFormElement;
    private input: HTMLInputElement;
    private table: HTMLTableElement;
    private lista: Lista;

    constructor(elemento: HTMLElement) {
        console.log("Colocando OOOOOOOO!");
        this.form = elemento.querySelector('form');
        //    const input : HTMLInputElement = <HTMLInputElement>document.getElementById("tf_2do");
        this.input = elemento.querySelector('#tf_2do');
        this.table = elemento.querySelector('#table');

        this.lista = new Lista();



        this.form.addEventListener(
            'submit',
            (evt) => {
                evt.preventDefault();
                let t = new Tarefa(this.input.value, Prioridade.baixa);
                this.lista.addTarefa(t);
                console.log(this.lista);
                this.renderizar();
            })


    }

    private renderizar() {
        let corpoTabela = document.createElement('tbody');
        this.lista.tarefas.forEach(tarefa => {
            corpoTabela.appendChild(this.criaLinhaTarefa());
        });
        this.table.replaceChild(corpoTabela, this.table.firstElementChild);

    }

    private criaLinhaTarefa(): HTMLTableRowElement {
        //Criando Linha
        let linha = document.createElement("tr");

        //Criando Célula do CheckBox
        let tdCheckBox = document.createElement("td");
        let Checkbox = document.createElement("input");
        Checkbox.type = "checkbox";
        tdCheckBox.appendChild(Checkbox);
        


        //Adicionando Elementos a linha
        linha.appendChild(tdCheckBox);
        console.log(linha);
        return linha;
    }

}








