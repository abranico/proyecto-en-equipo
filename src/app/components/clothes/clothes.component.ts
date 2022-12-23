import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  products :any = [];
  clothes :any = [];
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getData().subscribe(data=>{
      this.products = data;
      for(let i = 0; i < this.products.length; i++ ){
        if(this.products[i].category == "men's clothing" || this.products[i].category == "women's clothing"){
          this.clothes.push(this.products[i])
        }
      }
    })




  }

}
