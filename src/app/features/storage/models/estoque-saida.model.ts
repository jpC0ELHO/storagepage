import { Produto } from "./produto.model";
import { MotivoSaida } from "./motivo-saida.model";
import { Cliente } from "./cliente.model";
export interface EstoqueSaida{
    produtos:Produto;
    numero_local:number;
    local_saida:string;
    quantidade:number;
    valor_saida:number;
    transporte_valor:number;
    imposto:number;
    data_saida:string;
    motivo_saida:MotivoSaida;
    cliente:Cliente;
}