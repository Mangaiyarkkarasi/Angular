import { Component, OnInit } from '@angular/core';
import { Orders } from '../interfaces/Orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderArray:Orders[];
  orderMap=new Map();

  constructor() { }

  ngOnInit(): void {
    this.orderArray=[
      {name:" Italian Sausage Pan Pizza",numberOfItems:2,amount:20,status:"Order Received",custName:"xxx",price:12,totalPrice:24,address:"Ab Street, Bangalore",expanded:false},
      {name:"Marinara",numberOfItems:5,amount:20,status:"Order Received",custName:"yyx",price:100,totalPrice:500,address:"10,Ab Street, Bangalore",expanded:false},
      {name:"Margherita",numberOfItems:1,amount:200,status:"Order Received",custName:"uuu",price:1,totalPrice:220,address:"BB Street, Bangalore",expanded:false},
    ];
    for (let item of this.orderArray){
      console.log(item);
    }
  }

  changeStatus(data){
    let index = this.orderArray.indexOf(data);
    console.log(index);
    if(data.status=="Order Received"){
      data.status = "Preparing";
    }
    else if(data.status=="Preparing"){
      data.status="Ready to Serve"
    }
    else {
      data.status="Cancelled"
    }
    this.orderArray[index] = data;  }
}
