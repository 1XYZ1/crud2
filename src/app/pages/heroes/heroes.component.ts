import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { HeroeModel } from "../../models/heroe.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
      this.cargando = false;
    });
  }

  borrarHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "question",
      text: `Borrar ${heroe.nombre}`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Borrar"
    }).then(resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this.heroesService.borrarHeroes(heroe.id).subscribe();
      }
    });
  }
}
