import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SitioEnMantenimientoComponent } from './sitio-en-mantenimiento/sitio-en-mantenimiento.component';
import { LogoComponent } from './logo/logo.component';
import { TituloComponent } from './titulo/titulo.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MensajeRedesSocialesComponent } from './mensaje-redes-sociales/mensaje-redes-sociales.component';
import { IconosRedesSocialesComponent } from './iconos-redes-sociales/iconos-redes-sociales.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { Carousel1Component } from './home/carousel-1/carousel-1.component';
import { RedesSocialesComponent } from './home/redes-sociales/redes-sociales.component';
import { ModulosComponent } from './home/modulos/modulos.component';
import { FilosofiaComponent } from './home/filosofia/filosofia.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';
import { MapaComponent } from './contacto/mapa/mapa.component';
import { MotosComponent } from './motos/motos.component';
import { ListadoMotosComponent } from './motos/listado-motos/listado-motos.component';
import { PaginacionMotosComponent } from './motos/paginacion-motos/paginacion-motos.component';
import { MotosRelevantesComponent } from './home/motos/motos.component';
import { CategoriasMotosComponent } from './categorias-motos/categorias-motos.component';
import { ListadoCategoriasComponent } from './categorias-motos/listado-categorias/listado-categorias.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ListadoAccesoriosComponent } from './accesorios/listado-accesorios/listado-accesorios.component';
import { ListadoCategoriasAccesoriosComponent } from './accesorios/listado-categorias-accesorios/listado-categorias-accesorios.component';
import { PaginacionAccesoriosComponent } from './accesorios/paginacion-accesorios/paginacion-accesorios.component';
import { AccesorioComponent } from './accesorios/accesorio/accesorio.component';

// Servicios
import { AccesoriosService } from './servicios/accesorios.service';
import { InicioSesionComponent } from './login/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './login/registro/registro.component';
import { RecuperarPasswordComponent } from './login/recuperar-password/recuperar-password.component';

const routes: Routes = [
  {path: 'sitio-en-mantenimiento', component: SitioEnMantenimientoComponent},
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'motos-categorias', component: CategoriasMotosComponent},
  {path: 'motos', component: MotosComponent},
  {path: 'accesorios', component: AccesoriosComponent},
  {path: 'accesorios/cascos', component: ListadoAccesoriosComponent},
  {path: 'accesorios/accesorio1', component: AccesorioComponent},
  {path: 'login', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'password/reset', component: RecuperarPasswordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SitioEnMantenimientoComponent,
    LogoComponent,
    TituloComponent,
    MensajeComponent,
    MensajeRedesSocialesComponent,
    IconosRedesSocialesComponent,
    HomeComponent,
    HomeComponent,
    MenuComponent,
    Carousel1Component,
    RedesSocialesComponent,
    ModulosComponent,
    FilosofiaComponent,
    FooterComponent,
    MotosComponent,
    ContactoComponent,
    FormularioComponent,
    MapaComponent,
    MotosComponent,
    ListadoMotosComponent,
    PaginacionMotosComponent,
    MotosRelevantesComponent,
    CategoriasMotosComponent,
    ListadoCategoriasComponent,
    CategoriasMotosComponent,
    ListadoCategoriasComponent,
    AccesoriosComponent,
    ListadoAccesoriosComponent,
    ListadoCategoriasAccesoriosComponent,
    PaginacionAccesoriosComponent,
    AccesorioComponent,
    InicioSesionComponent,
    RegistroComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AccesoriosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
