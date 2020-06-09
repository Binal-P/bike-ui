import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service'
import {ActivatedRoute} from '@angular/router'
import { Subject } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit{

  public bikeReg;
  constructor(public bikeService:BikeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params.id);
  }
  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data => {
        console.log(data);
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log('Bikes loaded') 
    );
  }
 
}
