import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  @Input('heading') heading: string;
  @Input('subHeading') subHeading: string;
  constructor() {}

  ngOnInit(): void {}
}
