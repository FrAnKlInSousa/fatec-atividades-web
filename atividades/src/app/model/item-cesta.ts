import { Produto } from './produto';

export class ItemCesta {
  produto: Produto = new Produto();
  quantidade: number = 1;

  calcularSubtotal(): number {
    return this.produto.valor * this.quantidade;
  }
}
