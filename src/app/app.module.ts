import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AsideComponent } from './Components/aside/aside.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { QuienesSomosComponent } from './Components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { TestimonioComponent } from './Components/testimonio/testimonio.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

//Rutas
const routes: Routes =[
  {path: 'inicio', component: InicioComponent},
  {path:"QuienesSomos",component:QuienesSomosComponent},
  {path:"servicios",component:ServiciosComponent},
  {path:"testimonio",component:TestimonioComponent},
  {path:"contacto",component:ContactoComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    TestimonioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
