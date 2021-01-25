import { GuestService } from '../guest.service';
import { Guest } from '../guest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  guest: Guest = new Guest();
  submitted = false;

  constructor(private guestService: GuestService,
    private router: Router) { }

  ngOnInit() {
  }

  newGuest(): void {
    this.submitted = false;
    this.guest = new Guest();
  } 

  save() {
    this.guestService
    .createGuest(this.guest).subscribe(data => {
      console.log(data)
      this.guest = new Guest();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/guest']);
  }
}
