import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  host: {
    class: 'block p-4'
  }
})
export class FooterComponent implements OnInit {

  year: number = (new Date()).getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
