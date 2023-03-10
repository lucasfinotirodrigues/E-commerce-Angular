import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ActionFiguresComponent } from './pages/action-figures/action-figures.component';
import { ActionFigures2Component } from './pages/action-figures2/action-figures2.component';
import { ActionFigures3Component } from './pages/action-figures3/action-figures3.component';
import { MangasNovosComponent } from './pages/mangas-novos/mangas-novos.component';
import { RoupasMasculinasComponent } from './pages/roupas-masculinas/roupas-masculinas.component';
import { RoupasFemininasComponent } from './pages/roupas-femininas/roupas-femininas.component';
import { RoupasInfantisComponent } from './pages/roupas-infantis/roupas-infantis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    ActionFiguresComponent,
    ActionFigures2Component,
    ActionFigures3Component,
    MangasNovosComponent,
    RoupasMasculinasComponent,
    RoupasFemininasComponent,
    RoupasInfantisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
