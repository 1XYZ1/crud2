import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HeroesComponent } from "./pages/heroes/heroes.component";
import { HeroeComponent } from "./pages/heroe/heroe.component";

const routes: Routes = [
  { path: "", component: HeroesComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },

  { path: "**", pathMatch: "full", redirectTo: "heroes" }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
