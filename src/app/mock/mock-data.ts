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
        class: 'bg-9',
        image: host + '/assets/imgs/shop/cat-13.png',
      },
      {
        description: 'Oganic Kiwi',
        id: 2,
        url: '#1',
        item: 28,
        class: 'bg-10',
        image: host + '/assets/imgs/shop/cat-12.png',
      },
      {
        description: 'Peach',
        id: 3,
        url: '#1',
        item: 14,
        class: 'bg-11',
        image: host + '/assets/imgs/shop/cat-11.png',
      },
      {
        description: 'Red Apple',
        id: 4,
        url: '#1',
        item: 54,
        class: 'bg-13',
        image: host + '/assets/imgs/shop/cat-9.png',
      },
      {
        description: 'Snack',
        id: 5,
        url: '#1',
        item: 56,
        class: 'bg-14',
        image: host + '/assets/imgs/shop/cat-3.png',
      },
      {
        description: 'Vegetables',
        id: 6,
        url: '#1',
        item: 72,
        class: 'bg-15',
        image: host + '/assets/imgs/shop/cat-1.png',
      },
      {
        description: 'Strawberry',
        id: 7,
        url: '#1',
        item: 36,
        class: 'bg-12',
        image: host + '/assets/imgs/shop/cat-2.png',
      },
      {
        description: 'Black plum',
        id: 8,
        url: '#1',
        item: 123,
        class: 'bg-10',
        image: host + '/assets/imgs/shop/cat-4.png',
      },
      {
        description: 'Custard apple',
        id: 9,
        url: '#1',
        item: 34,
        class: 'bg-9',
        image: host + '/assets/imgs/shop/cat-5.png',
      },
      {
        description: 'Coffe & Tea',
        id: 10,
        url: '#1',
        item: 89,
        class: 'bg-11',
        image: host + '/assets/imgs/shop/cat-14.png',
      },
      {
        description: 'Headphone',
        id: 11,
        url: '#1',
        item: 87,
        class: 'bg-10',
        image: host + '/assets/imgs/shop/cat-15.png',
      },
    ];

    let popularProductMilk = [
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Snack',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        mark: 'NestFood',
        price: 28.85,
        discount: 32.8,
        class: 'hot',
      },
      {
        label: 'Sale',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Hodo Foods',
        description: 'All Natural Italian-Style Chicken Meatballs',
        starRate: 3,
        mark: 'Stouffer',
        price: 52.8,
        discount: 55.8,
        class: 'sale',
      },
      {
        label: 'New',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Snack',
        description: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
        starRate: 4,
        mark: 'StarKist',
        price: 48.85,
        discount: 52.8,
        class: 'new',
      },
      {
        label: '',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Vegetables',
        description: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        starRate: 4,
        mark: 'NestFood',
        price: 17.85,
        discount: 19.8,
        class: '',
      },
      {
        label: '-14%',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Pet Foods',
        description: 'Blue Diamond Almonds Lightly Salted Vegetables',
        starRate: 4,
        mark: 'NestFood',
        price: 23.85,
        discount: 25.8,
        class: 'best',
      },
      {
        label: '',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Hodo Foods',
        description: 'Chobani Complete Vanilla Greek Yogurt',
        starRate: 4,
        mark: 'NestFood',
        price: 54.85,
        discount: 55.8,
        class: '',
      },
      {
        label: '',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Meats',
        description: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g',
        starRate: 4,
        mark: 'NestFood',
        price: 32.85,
        discount: 33.8,
        class: '',
      },
      {
        label: 'Sale',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Snack',
        description: 'Encore Seafoods Stuffed Alaskan Salmon',
        starRate: 4,
        mark: 'NestFood',
        price: 35.85,
        discount: 37.8,
        class: 'sale',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Coffes',
        description: 'Gorton’s Beer Battered Fish Fillets with soft paper',
        starRate: 4,
        mark: 'Old El Paso',
        price: 23.85,
        discount: 25.8,
        class: 'hot',
      },
      {
        label: '',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Cream',
        description: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        starRate: 2,
        mark: 'Tyson',
        price: 22.85,
        discount: 24.8,
        class: '',
      },
    ];

    let popularProductCoffee = [
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

    let popularProductPet = [
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

    let popularProductMeat = [
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

    let popularProductVegetable = [
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

    let popularProductFruit = [
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

    return {
      carousel: carouselDetails,
      features: carouselFeatured,
      productMilk: popularProductMilk,
      productCoffee: popularProductCoffee,
      productPet: popularProductPet,
      productMeat: popularProductMeat,
      productVegetable: popularProductVegetable,
      productFruit: popularProductFruit,
    };
  }
}
