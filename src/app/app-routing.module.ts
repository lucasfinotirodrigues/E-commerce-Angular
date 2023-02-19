import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionFiguresComponent } from './pages/action-figures/action-figures.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
