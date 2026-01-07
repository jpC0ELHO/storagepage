import { EstadoBr } from "./estado-br.model";
export interface Endereco{
    logradouro:string;
    numero:string;
    complemento:string;
    bairro:string;
    cidade:string;
    estado_br:EstadoBr;
    cep:string;
}