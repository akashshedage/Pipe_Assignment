import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  presentDate = new Date();
  name='codemind';
  price = 10000;
  myObservable:any;
  jsonData = {id: 'one', name: 'codemind'};
  digits= 100;
  namesearch : string = '';

  productArr : any[]=[
    {
      sno: 1,
      name: 'Mobile',
      price: 19000,
      avaibility: 'Available'
    },
    {
      sno: 2,
      name: 'TV',
      price: 29000,
      avaibility: 'Available'
    },
    {
      sno: 3,
      name: 'Washing Machine',
      price: 190000,
      avaibility: 'Not Available'
    },
    {
      sno: 4,
      name: 'Tab',
      price: 39000,
      avaibility: 'Available'
    }
    
  ]
  constructor() { }

  ngOnInit() {
    // console.log(this.presentDate);

    // this.myObservable = of('This is my custom observable').pipe(delay(3000));
  
    
    }
    add(s,n,p,a){
      this.productArr.push({
        sno: s.value,
        name: n.value,
        price: p.value,
        avaibility: a.value
      });
  }
}

