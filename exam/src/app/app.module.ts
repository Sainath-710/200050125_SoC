import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MathsComponent } from './maths/maths.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent} from './chemistry/chemistry.component';

@NgModule({
  declarations: [
    AppComponent,
    MathsComponent,
    PhysicsComponent,
    ChemistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
