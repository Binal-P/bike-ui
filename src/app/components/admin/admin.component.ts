import { Component, OnInit, OnChanges } from '@angular/core';
import {BikeService} from '../../services/bike.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private bikeService: BikeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(
      data => {this.bikes = data},
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

  deleteBikeById(id:number){
    if(confirm("are you sure to delete "+id)){
    this.bikeService.deleteBike(id).subscribe(
      data => {this.bikes =data
      this.getBikes()},
      err => console.error(err),
      () => console.log('bike deleted')
    )
  }
}

}
