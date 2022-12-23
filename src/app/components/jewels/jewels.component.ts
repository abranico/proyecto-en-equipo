import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jewels',
  templateUrl: './jewels.component.html',
  styleUrls: ['./jewels.component.css']
})
export class JewelsComponent implements OnInit {
  products :any = [];
  jewels :any = [];
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getData().subscribe(data=>{
      this.products = data;
      for(let i = 0; i < this.products.length; i++ ){
        if(this.products[i].category == "jewelery"){
          this.jewels.push(this.products[i])
        }
      }
    })

}}
