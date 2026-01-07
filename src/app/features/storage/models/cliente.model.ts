import { Contato } from "./contato.model";
import { DocumentoTipo } from "./documento-tipo.model";
import { Endereco } from "./endereco.model";

export interface Cliente{
    nome:string;
    documento_tipo:DocumentoTipo;
    numero_documento:number;
    contato:Contato;
    endereco:Endereco;
}