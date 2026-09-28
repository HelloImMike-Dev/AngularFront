import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoPendienteGuard } from '../../guards/video-pendiente.guard';
import { EmbalarComponent } from "./embalar.component";



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmbalarComponent,
        canDeactivate: [VideoPendienteGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class EmbalarRoutingModule {
}
