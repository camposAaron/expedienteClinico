import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacienteComponent } from './pages/add-paciente/add-paciente.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'nuevo',
    component: AddPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
