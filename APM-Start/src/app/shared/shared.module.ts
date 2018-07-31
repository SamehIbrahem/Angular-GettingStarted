import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './StarComponent';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpaces
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpaces
  ]
})
export class SharedModule { }
