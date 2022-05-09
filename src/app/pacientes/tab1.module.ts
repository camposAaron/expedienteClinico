import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AddPacienteComponent } from './pages/add-paciente/add-paciente.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {IMaskModule} from 'angular-imask';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    IMaskModule
    
  ],
  declarations: [Tab1Page, AddPacienteComponent]
})
export class Tab1PageModule {}
