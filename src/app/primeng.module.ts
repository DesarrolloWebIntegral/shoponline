import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';

const modPrime: any = [
  AvatarModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  MenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports: [
    modPrime
  ]
})
export class PrimengModule { }
