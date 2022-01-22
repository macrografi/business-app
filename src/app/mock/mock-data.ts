import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockData implements InMemoryDbService {
  createDb() {
    //JSON data
    let carouselDetails = [
      {
        description: 'Banner 1 Desc',
        id: 1,
        url: '#1',
        image: 'https://i.ibb.co/XZqKHk6/image-1.jpg',
      },
      {
        description: 'Banner 2 Desc',
        id: 2,
        url: '#2',
        image: 'https://i.ibb.co/XZqKHk6/image-1.jpg',
      },
      {
        description: 'Banner 3 Desc',
        id: 3,
        url: '#3',
        image: 'https://i.ibb.co/XZqKHk6/image-1.jpg',
      },
      {
        description: 'Banner 4 Desc',
        id: 4,
        url: '#4',
        image: 'https://i.ibb.co/XZqKHk6/image-1.jpg',
      },
      {
        description: 'Banner 5 Desc',
        id: 5,
        url: '#5',
        image: 'https://i.ibb.co/XZqKHk6/image-1.jpg',
      },
    ];

    return { carousel: carouselDetails };
  }
}
