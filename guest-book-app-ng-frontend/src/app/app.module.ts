import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateGuestComponent,
    GuestDetailsComponent,
    GuestListComponent,
    UpdateGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
