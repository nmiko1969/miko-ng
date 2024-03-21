import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NmSplitterDividerComponent } from './nm-splitter-divider/nm-splitter-divider.component';
import { NmSplittertabComponent as NmSplitterComponent } from './nm-splittertab/nm-splittertab.component';
import { NmTabComponent } from './nm-tab/nm-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [
    NmSplitterComponent,
    NmTabComponent,
    NmSplitterDividerComponent,
  ],
  exports: [
    NmSplitterComponent,
    NmTabComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NmSplitterModule { }
