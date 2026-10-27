import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  textoBusca: string = '';

  gravarBusca() {
    const json = JSON.stringify(this.textoBusca);
    localStorage.setItem('busca', json);
  }
}
