import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingBarModule } from '../heading-bar/heading-bar.module';

import { ElectionFormOneRoutingModule } from './election-form-one-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { FormsModule } from '@angular/forms';
import { ElectionFormOneComponent } from './election-form-one.component';

@NgModule({
  declarations: [ElectionFormOneComponent],
  imports: [
    CommonModule,
    ElectionFormOneRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HeadingBarModule,
    FormsModule,
  ],
  exports: [ElectionFormOneComponent]
})
export class ElectionFormOneModule { }