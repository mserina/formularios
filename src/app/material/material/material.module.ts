import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

const material = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
