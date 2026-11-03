import { Component } from '@angular/core';
import { Cesta } from '../model/cesta';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
    mensagem: string = "";
  cesta: Cesta = new Cesta(null);


  ngOnInit(){
    let json = localStorage.getItem("cesta");
    if(json!=null){
      this.cesta = JSON.parse(json);
      this.mensagem = "";
    } else {
      this.mensagem = "Sua cesta esta vazia!";
    }
  }

  limpar(){
    localStorage.removeItem("cesta");
    location.href="./promo";
  }
}
