import { Prioridade } from './Prioridade';

export class Tarefa {
    constructor(
        private _descricao: String,
        private _prioridade: Prioridade,
        private _concluido: boolean = false) { }

    public set concluido(concluido: boolean) {
        this._concluido = concluido;
    }

    public get concluido(): boolean {
        return this._concluido;
    }
}