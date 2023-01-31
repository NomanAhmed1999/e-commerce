import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponentsComponent } from './share-components.component';

const routes: Routes = [{
  path: '',
  component: ShareComponentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareComponentsRoutingModule { }
