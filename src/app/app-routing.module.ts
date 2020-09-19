import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ContatoComponent } from './contato';
import { CadastroComponent } from './cadastro';
import { LoginComponent } from './login';
import { NovidadesComponent } from './novidades';
import { SobreComponent } from './sobre';
import { UsuarioLogadoComponent } from './usuario-logado';
import { AdminLogadoComponent } from './admin-logado';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'novidades',
    component: NovidadesComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'usuario-logado',
    component: UsuarioLogadoComponent
  },
  {
    path: 'admin-logado',
    component: AdminLogadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
