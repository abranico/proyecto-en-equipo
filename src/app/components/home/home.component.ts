import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  datos:any;
  products :any = {};
  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    this.ApiService.getData().subscribe(data=>{
      this.products = data;
    })

  }

  addToCart(index: number){
    console.log(index)
  }

}
