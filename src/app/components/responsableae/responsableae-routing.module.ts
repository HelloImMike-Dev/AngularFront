import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoPendienteGuard } from '../../guards/video-pendiente.guard';
import { ResponsableaeComponent } from './responsableae.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ResponsableaeComponent,
        canDeactivate: [VideoPendienteGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ResponsableaeRoutingModule {
}