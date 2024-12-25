import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsArrayComponent } from './components/forms-array/forms-array.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParentChildCommunicationsComponent } from './components/parent-child-communications/parent-child-communications.component';
import { NestedFormGroupArrayComponent } from './components/nested-form-group-array/nested-form-group-array.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
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
  {
    path: 'ParentChildCommu',
    component: ParentChildCommunicationsComponent,
  },
  {
    path: 'NestedFormGroupArray',
    component: NestedFormGroupArrayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
