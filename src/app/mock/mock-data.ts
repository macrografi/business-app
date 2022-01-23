import { InMemoryDbService } from 'angular-in-memory-web-api';
let host = `${window.location.protocol}//${window.location.host}`;

export class MockData implements InMemoryDbService {
  createDb() {
    //JSON data
    let carouselDetails = [
      {
        description: 'Banner 1 Desc',
        id: 1,
        url: '#1',
        image: host + '/assets/imgs/slider/slider-1.png',
      },
      {
        description: 'Banner 2 Desc',
        id: 2,
        url: '#2',
        image: host + '/assets/imgs/slider/slider-2.png',
      },
      {
        description: 'Banner 3 Desc',
        id: 3,
        url: '#3',
        image: host + '/assets/imgs/slider/slider-3.png',
      },
      {
        description: 'Banner 4 Desc',
        id: 4,
        url: '#4',
        image: host + '/assets/imgs/slider/slider-4.png',
      },
    ];

    return { carousel: carouselDetails };
  }
}
