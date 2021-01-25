import { GuestDetailsComponent } from '../guest-details/guest-details.component';
import { Observable } from "rxjs";
import { GuestService } from "../guest.service";
import { Guest } from "../guest";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-guest-list",
  templateUrl: "./guest-list.component.html",
  styleUrls: ["./guest-list.component.css"]
})
export class GuestListComponent implements OnInit {
  guest: Observable<Guest[]>;

  constructor(private guestService: GuestService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.guest = this.guestService.getGuestList();
  }

  deleteGuest(id: number) {
    this.guestService.deleteGuest(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  guestDetails(id: number){
    this.router.navigate(['details', id]);
  }

  update(id: number){
    this.router.navigate(['update', id]);
  }
}
