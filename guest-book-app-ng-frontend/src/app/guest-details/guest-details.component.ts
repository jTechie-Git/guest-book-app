import { Guest } from '../guest';
import { Component, OnInit, Input } from '@angular/core';
import { GuestService } from '../guest.service';
import { GuestListComponent } from '../guest-list/guest-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['guest']);
  }
}
