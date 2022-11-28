import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.component.html',
  styleUrls: ['./item-list-component.component.css'],
})
export class ItemListComponentComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.data = await this.http
      .get('http://localhost:3000/getAllItems')
      .toPromise();
  }
}
