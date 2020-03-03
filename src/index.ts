import "./style.css";
import "material-icons/iconfont/material-icons.css";

import  {Tarefa} from "./Tafera";
import  {Prioridade} from "./Prioridade";
import { Lista } from "./Lista";

console.log("Uêpah!");

let t1 = new Tarefa(
    "Escovar os Dentes",
     Prioridade.alta
     );

let t2 = new Tarefa(
    "Comer",
     Prioridade.media
     );

let t3 = new Tarefa(
    "Dormir",
     Prioridade.baixa
     );

let lista = new Lista();
lista.addTarefa(t1, t2, t3)

const form : HTMLFormElement = <HTMLFormElement>document.getElementById("form");
const input : HTMLInputElement = <HTMLInputElement>document.getElementById("tf_2do");

form.addEventListener(
    'submit', 
    (evt) => {
        evt.preventDefault();
        let t = new Tarefa(input.value, Prioridade.baixa);
        lista.addTarefa(t);
        console.log(lista);

    })

