import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestListComponent } from './guest-list/guest-list.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';

const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: 'guest', component: GuestListComponent },
  { path: 'add', component: CreateGuestComponent },
  { path: 'update/:id', component: UpdateGuestComponent },
  { path: 'details/:id', component: GuestDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
