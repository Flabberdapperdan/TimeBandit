import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ClockComponent } from './clock/clock.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, ClockComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class MainModule {}
