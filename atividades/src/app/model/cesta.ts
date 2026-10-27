import { ItemCesta } from './item-cesta';

export class Cesta {
  itens: ItemCesta[] = [];

  calcularTotal(): number {
    return this.itens.reduce(
      (total, item) => total + item.calcularSubtotal(),
      0,
    );
  }
}
