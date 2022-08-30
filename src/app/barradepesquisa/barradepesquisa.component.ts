import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barradepesquisa',
  templateUrl: './barradepesquisa.component.html',
  styleUrls: ['./barradepesquisa.component.css']
})
export class BarradepesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: { descricao: this.descricao }})
      return;
    }
    this.router.navigate(["produtos"]);
  }

}
