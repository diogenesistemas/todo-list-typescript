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

        // Criando descrição da tarefa
        let tdDescricaoTarefa = document.createElement("td");
        tdDescricaoTarefa.textContent = "Minha tarefa Padrao";


        // Criando botão remover
        let tdBotaoRemover = document.createElement("td");
        let btRemover = document.createElement("i");
        btRemover.className = "material-icons";
        btRemover.innerHTML = "delete";
        tdBotaoRemover.appendChild(btRemover);


        let tdPrioridade = document.createElement("td");
        tdPrioridade.innerHTML = `[${Prioridade[1]}]`;





        //Adicionando Elementos a linha
        linha.appendChild(tdCheckBox);
        linha.appendChild(tdDescricaoTarefa);
        linha.appendChild(tdPrioridade);
        linha.appendChild(tdBotaoRemover);
        console.log(linha);
        return linha;
    }

}








