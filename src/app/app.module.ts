import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
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
import { QuadrosComponent } from './pages/quadros/quadros.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { IonicModule } from '@ionic/angular';
import { ModalTermosComponent } from './pages/modal-termos/modal-termos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MessageComponent } from './pages/message/message.component';

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
    QuadrosComponent,
    ModalTermosComponent,
    NavbarComponent,
    PagamentoComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    RouterModule,
    IonicModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
