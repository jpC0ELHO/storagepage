import { Produto } from "./produto";
import { Fornecedor } from "./fornecedor.model";
import { LocalArmazenamento } from "./local-armazenamento.model";

export interface EstoqueEntrada{
    produto:Produto;
    fornecedor:Fornecedor;
    local_armazenamento:LocalArmazenamento;
    numero_local?:number;
    descricao_armazenamento:string;
    quantidade:number;
    valor_unidade:number;
    impostos?:number;
    data_entrada:string;
    valor_total_bruto:number;
    valor_total_liquido:number;
}