import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NmSplitterModule } from '../nm-splitter/nm-splitter.module';
import { BasicExampleComponent } from './basic-example/basic-example.component';



@NgModule({
  declarations: [
    BasicExampleComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NmSplitterModule,
  ],
  exports: [
    BasicExampleComponent
  ]
})
export class ExamplesModule { }
