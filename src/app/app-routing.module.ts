import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsArrayComponent } from './components/forms-array/forms-array.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ParticlesComponent } from './components/particles/particles.component';

const routes: Routes = [
  {
    path: 'formarray',
    component: FormsArrayComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'ReactiveForms',
    component: ReactiveFormsComponent,
  },
  {
    path: 'particles',
    component: ParticlesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
