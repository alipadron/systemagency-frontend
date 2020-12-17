import { Component, OnInit } from '@angular/core';
import { Images } from 'angular-responsive-carousel';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styles: [],
})
export class WorkComponent implements OnInit {
  models = [
    {
      photo:
        'https://static.wixstatic.com/media/f41861_6049243ef8684e7eb4c0ef3626e467f6~mv2.jpg/v1/fill/w_373,h_551,al_c,q_80,usm_0.66_1.00_0.01/Aivita-Chanel.webp',
      firstName: 'Aivita',
      lastName: 'Muze',
      paragraphs: [
        'Chanel F/W 20',
        'Designer: Virginies Viard',
        'Stylist: Amanda Harlech',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_8b80acfa36bb446ba363651858f22a0a~mv2.jpeg/v1/fill/w_379,h_551,al_c,q_80,usm_0.66_1.00_0.01/Vika%20Lulko%20Prada.webp',
      firstName: 'Viktoria',
      lastName: 'Lulko',
      paragraphs: [
        'Prada Exclusive F/W 20',
        'Designer: Miuccia Prada',
        'Stylist: Olivier Rizzo',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_e0893a190fb7430f8684116dc7b937a5~mv2.jpeg/v1/fill/w_400,h_470,al_c,q_80,usm_0.66_1.00_0.01/Vika%20Lulko%20Margiela.webp',
      firstName: 'Viktoria',
      lastName: 'Lulko',
      paragraphs: [
        'Maison Margiela F/W 20 (Opening)',
        'Designer: John Galliano',
        'Casting: Jess Hallett',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_523c427097984d79a46b60621f0fcedf~mv2.jpeg/v1/fill/w_379,h_560,al_c,q_80,usm_0.66_1.00_0.01/Vika%20Lulko%20Valentino.webp',
      firstName: 'Viktoria',
      lastName: 'Lulko',
      paragraphs: [
        'Valentino F/W 20 (Opening)',
        'Designer: Pierpaolo Piccioli',
        'Stylist: Joe McKenna',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_b030cf72959e4f27a2bef8018ed8f166~mv2.jpg/v1/fill/w_381,h_550,al_c,q_80,usm_0.66_1.00_0.01/Nastya-Gonchar-2.webp',
      firstName: 'Nastya',
      lastName: 'Gonchar',
      paragraphs: [
        'Miu Miu Exclusive F/W 20',
        'Designer: Miuccia Prada',
        'Casting: Anita Bitton',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_b32ff913c13d47ffb549cfa7983a229e~mv2.jpg/v1/fill/w_451,h_550,al_c,q_80,usm_0.66_1.00_0.01/Nastya-Gonchar-2-2.webp',
      firstName: 'Nastya',
      lastName: 'Gonchar',
      paragraphs: ["Harper's Bazaar China", 'Photographer: Win Tam'],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_5e61113d47784286af1b41b533730be5~mv2.jpg/v1/fill/w_400,h_513,al_c,q_80,usm_0.66_1.00_0.01/Vovk-1.webp',
      firstName: 'Vovk',
      lastName: '',
      paragraphs: [
        'Grazia Russia',
        'Photographer: Vladimir Vasilchikov',
        'Stylist: Alisa Zhidkova',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_e26f6892e3eb42cda2e972e1044e21e3~mv2.jpg/v1/fill/w_360,h_550,al_c,q_80,usm_0.66_1.00_0.01/Vika%20Reza%20Yohji-Yamamoto.webp',
      firstName: 'Vika',
      lastName: 'Reza',
      paragraphs: [
        'Yohji Yamamoto F/W 20',
        'Designer: Yohji Yamamoto',
        'Casting: Remi Felipe',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_dfc445207f2d42069706eb67f360da54~mv2.jpg/v1/fill/w_400,h_500,al_c,q_80,usm_0.66_1.00_0.01/Fiffany%20Luu.webp',
      firstName: 'Fiffany',
      lastName: 'Luu',
      paragraphs: [
        'CR Fashion Book',
        'Photographer: Jon Ervin',
        'Stylist: Daniel Gaines',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_ad7c805a63754e0a821366422cb7ddc6~mv2.jpg/v1/fill/w_399,h_500,al_c,q_80,usm_0.66_1.00_0.01/George-Okeny-6-2.webp',
      firstName: 'George',
      lastName: 'Okeny',
      paragraphs: [
        'COS S/S 20 Campaign',
        'Photographer: Zoë Ghertner',
        'Stylist: Hannes Hetta',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_2322bedab27c47459862c373266f6df4~mv2.jpeg/v1/fill/w_370,h_550,al_c,q_80,usm_0.66_1.00_0.01/Andrey%20K%20-%20Givenchy.webp',
      firstName: 'Andrey',
      lastName: 'Suchkov',
      paragraphs: [
        'Givenchy F/W 20',
        'Designer: Clare Waight Keller',
        'Stylist: Mel Ottenberg',
      ],
    },
    {
      photo:
        "https://static.wixstatic.com/media/f41861_718c91623999400bb889dec5a8ac0591~mv2.jpg/v1/fill/w_379,h_500,al_c,q_80,usm_0.66_1.00_0.01/Pasha%20for%20Harper's%20Bazaar%20Ukraine.webp",
      firstName: 'Pasha',
      lastName: 'Harulia',
      paragraphs: [
        "Harper's Bazaar Ukraine",
        'Photographer: Ania Brudnar',
        'Stylist: Aleksandr Kutovoy',
      ],
    },
    {
      photo:
        "https://static.wixstatic.com/media/f41861_4ad8b290ca5249dabcf17a2393245fdf~mv2.jpg/v1/fill/w_369,h_487,al_c,q_80,usm_0.66_1.00_0.01/Rose%20V%20for%20Harper's%20Bazaar%20Brasil.webp",
      firstName: 'Rose',
      lastName: 'Valentine',
      paragraphs: [
        "Harper's Bazaar Brasil",
        'Photographer: Stèphanie Volpato',
        'Makeup: Camille Siguret',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_5aac1548fb8641698dc21896196d2ab0~mv2.jpg/v1/fill/w_369,h_550,al_c,q_80,usm_0.66_1.00_0.01/Aivita%20for%20Burberry%20FW2020%20show%20(to%20be%20p.webp',
      firstName: 'Aivita',
      lastName: 'Muze',
      paragraphs: [
        'Burberry F/W 20',
        'Designer: Ricardo Tisci',
        'Stylist: Carlos Nazario / Katy England',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_4ad10c6ebb0c430d8fc24cd8652a05eb~mv2.jpg/v1/fill/w_398,h_520,al_c,q_80,usm_0.66_1.00_0.01/Anya%20Lyagoshina%20for%20Emporio%20Armani%20SS202.webp',
      firstName: 'Anya',
      lastName: 'Lyagoshina',
      paragraphs: [
        'Emporio Armani S/S 20 Campaign',
        'Designer: Giorgio Armani',
        'Photographer: Mario Sorrenti',
      ],
    },
    {
      photo:
        "https://static.wixstatic.com/media/f41861_0d9f51afd1ea47699bb6bde702d2e222~mv2.jpg/v1/fill/w_389,h_570,al_c,q_80,usm_0.66_1.00_0.01/Adel%20for%20Harper's%20Bazaar%20Ukraine.webp",
      firstName: 'Adel',
      lastName: 'Iudina',
      paragraphs: [
        "Harper's Bazaar Ukraine",
        'Photographer: Sina Görtz-Östlund',
        'Stylist: Tomislav Blaic',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_1d8b5fc958984fb68c61eb955a92c701~mv2.jpg/v1/fill/w_408,h_520,al_c,q_80,usm_0.66_1.00_0.01/George%20for%20the%20LOVE%20Magazine.webp',
      firstName: 'George',
      lastName: 'Okeny',
      paragraphs: [
        'LOVE Magazine',
        'Photographer: Michael Balley Gates',
        'Stylist: Ib Kamara',
      ],
    },
    {
      photo:
        'https://static.wixstatic.com/media/f41861_48da060c89a74462be4e47a940eb5127~mv2.jpg/v1/fill/w_382,h_550,al_c,q_80,usm_0.66_1.00_0.01/Nigina%20for%20Bottega%20Veneta%20FW2020%20show%20(t.webp',
      firstName: 'Nigina',
      lastName: '',
      paragraphs: [
        'Bottega Veneta F/W 20',
        'Designer: Daniel Lee',
        'Stylist: Marie Chaix',
      ],
    },
  ];

  carouselImages: Images = this.models.map(({ photo }) => ({ path: photo }));

  constructor() {}

  ngOnInit(): void {}
}
