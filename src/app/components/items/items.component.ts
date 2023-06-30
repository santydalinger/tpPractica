import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:Item[ ]=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        id:0,
        title:'manzana',
        price:10.5,
        quantity:4,
        completed:false

      },
      {
        id:1,
        title:'pera',
        price:9.5,
        quantity:6,
        completed:true

      },
    ]
  }

}
