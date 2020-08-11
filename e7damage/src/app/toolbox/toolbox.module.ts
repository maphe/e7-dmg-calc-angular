import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";
import { FlexModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [StatBlockComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSliderModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    StatBlockComponent
  ]
})
export class ToolboxModule {
}
