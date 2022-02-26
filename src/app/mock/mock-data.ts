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

    let carouselFeatured = [
      {
        description: 'Cake & Milk',
        id: 1,
        url: '#1',
        item: 26,
        image: host + '/assets/imgs/shop/cat-13.png',
      },
      {
        description: 'Oganic Kiwi',
        id: 2,
        url: '#1',
        item: 28,
        image: host + '/assets/imgs/shop/cat-12.png',
      },
      {
        description: 'Peach',
        id: 3,
        url: '#1',
        item: 14,
        image: host + '/assets/imgs/shop/cat-11.png',
      },
      {
        description: 'Red Apple',
        id: 4,
        url: '#1',
        item: 54,
        image: host + '/assets/imgs/shop/cat-9.png',
      },
      {
        description: 'Snack',
        id: 5,
        url: '#1',
        item: 56,
        image: host + '/assets/imgs/shop/cat-3.png',
      },
      {
        description: 'Vegetables',
        id: 6,
        url: '#1',
        item: 72,
        image: host + '/assets/imgs/shop/cat-1.png',
      },
      {
        description: 'Strawberry',
        id: 7,
        url: '#1',
        item: 36,
        image: host + '/assets/imgs/shop/cat-2.png',
      },
      {
        description: 'Black plum',
        id: 8,
        url: '#1',
        item: 123,
        image: host + '/assets/imgs/shop/cat-4.png',
      },
      {
        description: 'Custard apple',
        id: 9,
        url: '#1',
        item: 34,
        image: host + '/assets/imgs/shop/cat-5.png',
      },
      {
        description: 'Coffe & Tea',
        id: 10,
        url: '#1',
        item: 89,
        image: host + '/assets/imgs/shop/cat-14.png',
      },
      {
        description: 'Headphone',
        id: 11,
        url: '#1',
        item: 87,
        image: host + '/assets/imgs/shop/cat-15.png',
      },
    ];

    let popularProduct = [
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
      {
        label: 'Hot',
        image: host + 'assets/imgs/shop/product-1-1.jpg',
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 'number',
        mark: 'string',
        price: 'number',
        discount: 'number',
      },
    ];

    return { carousel: carouselDetails, features: carouselFeatured, product: popularProduct };
  }
}
