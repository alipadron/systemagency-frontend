import { Component, OnInit } from '@angular/core';

interface MainNavItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  host: {
    class: 'block p-4 top-0 sticky h-28 bg-white z-50',
  },
})
export class HeaderComponent implements OnInit {
  items: MainNavItem[] = [
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Work',
      url: 'work',
    },
    {
      name: 'Talent',
      url: 'talent',
    },
    {
      name: 'Representation',
      url: 'representation',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
