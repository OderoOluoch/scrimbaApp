import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import {DataService } from '../core/data.services';

import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})

export class CustomersComponent implements OnInit {
  title: string;
  // people: ICustomer[];
  people:any [];
  isVisible = true;

  changeVisibility(){
    this.isVisible = !this.isVisible
    console.log(this.isVisible)
  }

  constructor(private dataService:DataService) {}

  ngOnInit(){
    this.title = 'Customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers)
    // this.people = [
    //     { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    //     { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //     { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //     { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    // ];
  }
}
