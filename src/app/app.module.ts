import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoHeaderComponent } from './components/logo-header/logo-header.component';
import { RedesComponent } from './components/redes/redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditAboutmeComponent } from './components/about-me/edit-aboutme.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoHeaderComponent,
    RedesComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAboutmeComponent,
    NewProyectoComponent,
    EditProyectoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
