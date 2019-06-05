import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LazyPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyPageComponent }
    ])
  ]
})
export class LazyloadingModule { }
