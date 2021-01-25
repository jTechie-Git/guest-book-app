import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { ActivatedRoute, Router } from '@angular/router';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.css']
})
export class UpdateGuestComponent implements OnInit {

  id: number;
  guest: Guest;

  constructor(private route: ActivatedRoute,private router: Router,
    private guestService: GuestService) { }

  ngOnInit() {
    this.guest = new Guest();

    this.id = this.route.snapshot.params['id'];
    
    this.guestService.getGuest(this.id)
      .subscribe(data => {
        console.log(data)
        this.guest = data;
      }, error => console.log(error));
  }

  updateGuest() {
    this.guestService.updateGuest({ id: this.id, value: this.guest })
      .subscribe(data => {
        console.log(data);
        this.guest = new Guest();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateGuest();    
  }

  gotoList() {
    this.router.navigate(['/guest']);
  }
}
