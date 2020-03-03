import { Tarefa } from "./Tafera";

export class Lista {
    private _lista: Tarefa[] = [];

    // addTarefa(t: Tarefa): Tarefa {
    //     this._lista.push(t);
    //     return t;
    // }

    //Adicionando várias tarefas com Sprad Operator
    addTarefa(...t: Tarefa[]) {
        this._lista.push(...t);
    }

    removeTarefa(t: Tarefa) {
        let pos: number = this._lista.indexOf(t);
        if (pos > -1) {
            this._lista.splice(pos, 1);
        }
    }

    public get tarefas(): Tarefa[] {
        return this._lista;
    }
}