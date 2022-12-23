import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {
  products :any = [];
  electronic :any = [];
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getData().subscribe(data=>{
      this.products = data;
      for(let i = 0; i < this.products.length; i++ ){
        if(this.products[i].category == "electronics"){
          this.electronic.push(this.products[i])
        }
      }
    })

}}
