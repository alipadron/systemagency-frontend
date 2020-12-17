import { Component, OnInit } from '@angular/core';
import { Images } from 'angular-responsive-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [],
})
export class LandingComponent implements OnInit {
  carouselImages: Images = [
    {
      path:
        'https://static.wixstatic.com/media/f41861_16c22b1698d342118498070af93cf521~mv2.jpeg/v1/fill/w_293,h_399,al_c,q_80,usm_0.66_1.00_0.01/7.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_7aafbe2938d942ccb5fc8806930aa21d~mv2.jpeg/v1/fill/w_269,h_399,al_c,q_80,usm_0.66_1.00_0.01/6.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_998233dceb3041439eeb0cf6107f5bbf~mv2.jpeg/v1/fill/w_309,h_399,al_c,q_80,usm_0.66_1.00_0.01/4.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_0edee6fbe3a74f17b87e819e3c4dee90~mv2.jpeg/v1/fill/w_269,h_399,al_c,q_80,usm_0.66_1.00_0.01/3.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_bb1609c36fd94e9d960f5e4fdec63ef7~mv2.jpeg/v1/fill/w_309,h_400,al_c,q_80,usm_0.66_1.00_0.01/17.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_100a28c6afae46378fa30eb8e9ffb7cb~mv2.jpeg/v1/fill/w_269,h_400,al_c,q_80,usm_0.66_1.00_0.01/18.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_76fdd43387da44769284fe79b0e01bca~mv2.jpeg/v1/fill/w_289,h_400,al_c,q_80,usm_0.66_1.00_0.01/14.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_d4e03bfb3b104c3fb62da160b2cbfd7f~mv2.jpeg/v1/crop/x_60,y_0,w_1172,h_1600/fill/w_293,h_400,al_c,q_80,usm_0.66_1.00_0.01/15.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_953f0abd1cec41c5a727272de8f04dfb~mv2.jpeg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01/16.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_140537404a834b229dd2d40b490b2a5f~mv2.jpeg/v1/crop/x_84,y_2,w_1242,h_905/fill/w_549,h_400,al_c,q_80,usm_0.66_1.00_0.01/13.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_3a744374d62e41699f8ba0d14c8f753f~mv2.jpeg/v1/crop/x_18,y_3,w_397,h_509/fill/w_312,h_400,al_c,q_80,usm_0.66_1.00_0.01/12.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_687d903832574bc7947c4d2f92a1a0dd~mv2.jpeg/v1/fill/w_304,h_400,al_c,q_80,usm_0.66_1.00_0.01/11.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_13493c5f72ad4eb1bbbd8e4ff12a207e~mv2.jpeg/v1/fill/w_269,h_400,al_c,q_80,usm_0.66_1.00_0.01/8.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_005052ea40674cf184bd6b5762b8c4f2~mv2.jpeg/v1/crop/x_72,y_0,w_1068,h_1600/fill/w_271,h_400,al_c,q_80,usm_0.66_1.00_0.01/10.webp',
    },
    {
      path:
        'https://static.wixstatic.com/media/f41861_f3e75ac6f68c44049e7600b10e019d15~mv2.jpeg/v1/fill/w_291,h_400,al_c,q_80,usm_0.66_1.00_0.01/9.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
