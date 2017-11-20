import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// Importacion de Componentes
import { AppComponent } from './app.component';
import { SitioEnMantenimientoComponent } from './components/sitio-en-mantenimiento/sitio-en-mantenimiento.component';
import { LogoComponent } from './components/sitio-en-mantenimiento/logo/logo.component';
import { TituloComponent } from './components/sitio-en-mantenimiento/titulo/titulo.component';
import { MensajeComponent } from './components/sitio-en-mantenimiento/mensaje/mensaje.component';
import { MensajeRedesSocialesComponent } from './components/sitio-en-mantenimiento/mensaje-redes-sociales/mensaje-redes-sociales.component';
import { IconosRedesSocialesComponent } from './components/sitio-en-mantenimiento/iconos-redes-sociales/iconos-redes-sociales.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { Carousel1Component } from './components/home/carousel-1/carousel-1.component';
import { RedesSocialesComponent } from './components/home/redes-sociales/redes-sociales.component';
import { ModulosComponent } from './components/home/modulos/modulos.component';
import { FilosofiaComponent } from './components/home/filosofia/filosofia.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioComponent } from './components/contacto/formulario/formulario.component';
import { MapaComponent } from './components/contacto/mapa/mapa.component';
import { MotosComponent } from './components/motos/motos.component';
import { ListadoMotosComponent } from './components/motos/listado-motos/listado-motos.component';
import { PaginacionMotosComponent } from './components/motos/paginacion-motos/paginacion-motos.component';
import { MotosRelevantesComponent } from './components/home/motos/motos.component';
import { CategoriasMotosComponent } from './components/motos/categorias-motos/categorias-motos.component';
import { ListadoCategoriasComponent } from './components/motos/categorias-motos/listado-categorias/listado-categorias.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import { ListadoAccesoriosComponent } from './components/accesorios/listado-accesorios/listado-accesorios.component';
import { ListadoCategoriasAccesoriosComponent } from './components/accesorios/listado-categorias-accesorios/listado-categorias-accesorios.component';
import { PaginacionAccesoriosComponent } from './components/accesorios/paginacion-accesorios/paginacion-accesorios.component';
import { AccesorioComponent } from './components/accesorios/accesorio/accesorio.component';
import { InicioSesionComponent } from './components/login/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/login/registro/registro.component';
import { RecuperarPasswordComponent } from './components/login/recuperar-password/recuperar-password.component';
import { ListadoCategoriasPromocionesComponent } from './components/promociones/listado-categorias-promociones/listado-categorias-promociones.component';

// Rutas
const routes: Routes = [
  {path: 'sitio-en-mantenimiento', component: SitioEnMantenimientoComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},

  {path: 'motos/pioneer', component: MotosComponent},
  {path: 'motos', component: CategoriasMotosComponent},

  {path: 'accesorios', component: AccesoriosComponent},
  {path: 'accesorios/cascos', component: ListadoAccesoriosComponent},
  {path: 'accesorios/accesorio1', component: AccesorioComponent},

  {path: 'login', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'password/reset', component: RecuperarPasswordComponent},

  {path: 'promociones', component: ListadoCategoriasPromocionesComponent},
  {path: 'promociones/motos', component: ListadoPromocionesComponent}

];

// Servicios
import { AccesoriosService } from './servicios/accesorios.service';
import { ListadoPromocionesComponent } from './components/promociones/listado-promociones/listado-promociones.component';
import { PromocionComponent } from './components/promociones/promocion/promocion.component';

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
    RecuperarPasswordComponent,
    ListadoCategoriasPromocionesComponent,
    ListadoPromocionesComponent,
    PromocionComponent
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
