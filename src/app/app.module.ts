import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsArrayComponent } from './components/forms-array/forms-array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentChildCommunicationsComponent } from './components/parent-child-communications/parent-child-communications.component';
import { NestedFormGroupArrayComponent } from './components/nested-form-group-array/nested-form-group-array.component';

@NgModule({
  declarations: [AppComponent, FormsArrayComponent, PipesComponent, ReactiveFormsComponent, ParticlesComponent, DashboardComponent, NavbarComponent, ParentChildCommunicationsComponent, NestedFormGroupArrayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
