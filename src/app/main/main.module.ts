import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ClockComponent } from './clock/clock.component';
import { MembersComponent } from './members/members.component';
import { RouterModule, Routes } from '@angular/router';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, ClockComponent, MembersComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}
