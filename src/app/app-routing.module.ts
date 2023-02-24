import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionFiguresComponent } from './pages/action-figures/action-figures.component';
import { ActionFigures2Component } from './pages/action-figures2/action-figures2.component';
import { ActionFigures3Component } from './pages/action-figures3/action-figures3.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MangasNovosComponent } from './pages/mangas-novos/mangas-novos.component';
import { RoupasMasculinasComponent } from './pages/roupas-masculinas/roupas-masculinas.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent
  },
  { 
    path: 'login', component: LoginComponent
  },
  { 
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'action-figures', component: ActionFiguresComponent
  },
  {
    path: 'action-figures2', component: ActionFigures2Component
  },  
  {
    path: 'action-figures3', component: ActionFigures3Component
  },
  {
    path: 'manga', component: MangasNovosComponent
  },
  {
    path: 'roupas-masculina', component: RoupasMasculinasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
