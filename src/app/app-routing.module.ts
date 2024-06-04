import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'register', component: RegistroComponent},
  {path: '', component: ProductoListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
