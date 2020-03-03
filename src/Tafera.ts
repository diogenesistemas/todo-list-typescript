import { Prioridade } from './Prioridade';

export class Tarefa {
    constructor(
        private _descricao: string,
        private _prioridade: Prioridade,
        private _concluido: boolean = false) { }

    public set concluido(concluido: boolean) {
        this._concluido = concluido;
    }

    public get concluido(): boolean {
        return this._concluido;
    }

    public get descricao(): string{
        return this._descricao;
    }

    public get prioridade(): Prioridade{
        return this._prioridade;
    }
}