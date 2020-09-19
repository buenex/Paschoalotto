import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountModule, AccountService} from './account';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { NovidadesComponent } from './novidades/novidades.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuarioLogadoComponent } from './usuario-logado/usuario-logado.component';
import { AdminLogadoComponent } from './admin-logado/admin-logado.component';
import { HttpClient } from '@angular/common/http';
import { NavLoginComponent } from './nav-login/nav-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    NovidadesComponent,
    ContatoComponent,
    SobreComponent,
    UsuarioLogadoComponent,
    AdminLogadoComponent,
    NavLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    FormsModule
  ],
  providers: [HttpClient, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
