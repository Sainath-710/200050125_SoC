import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathsComponent } from './maths/maths.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent} from './chemistry/chemistry.component';

const routes: Routes = [
  { path: 'maths' , component: MathsComponent},
  { path: 'physics' , component: PhysicsComponent},
  { path: 'chemistry', component: ChemistryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MathsComponent, PhysicsComponent, ChemistryComponent]