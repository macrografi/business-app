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
        image: [host + '/assets/imgs/shop/product-11-1.jpg', host + '/assets/imgs/shop/product-11-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-12-1.jpg', host + '/assets/imgs/shop/product-12-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-14-1.jpg', host + '/assets/imgs/shop/product-14-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-15-1.jpg', host + '/assets/imgs/shop/product-15-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-16-1.jpg', host + '/assets/imgs/shop/product-16-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-7-1.jpg', host + '/assets/imgs/shop/product-7-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-8-1.jpg', host + '/assets/imgs/shop/product-8-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-2-1.jpg', host + '/assets/imgs/shop/product-2-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-3-1.jpg', host + '/assets/imgs/shop/product-3-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-4-1.jpg', host + '/assets/imgs/shop/product-4-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-5-1.jpg', host + '/assets/imgs/shop/product-5-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-6-1.jpg', host + '/assets/imgs/shop/product-6-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-7-1.jpg', host + '/assets/imgs/shop/product-7-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-8-1.jpg', host + '/assets/imgs/shop/product-8-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Cream',
        description: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        starRate: 2,
        mark: 'Tyson',
        price: 22.85,
        discount: 24.8,
        class: '',
      },
    ];
    let popularProductPet = [
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-11-1.jpg', host + '/assets/imgs/shop/product-11-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-12-1.jpg', host + '/assets/imgs/shop/product-12-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-14-1.jpg', host + '/assets/imgs/shop/product-14-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-15-1.jpg', host + '/assets/imgs/shop/product-15-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-16-1.jpg', host + '/assets/imgs/shop/product-16-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-7-1.jpg', host + '/assets/imgs/shop/product-7-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-8-1.jpg', host + '/assets/imgs/shop/product-8-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Cream',
        description: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        starRate: 2,
        mark: 'Tyson',
        price: 22.85,
        discount: 24.8,
        class: '',
      },
    ];
    let popularProductMeat = [
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
        image: [host + '/assets/imgs/shop/product-2-1.jpg', host + '/assets/imgs/shop/product-2-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-3-1.jpg', host + '/assets/imgs/shop/product-3-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-4-1.jpg', host + '/assets/imgs/shop/product-4-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-5-1.jpg', host + '/assets/imgs/shop/product-5-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-6-1.jpg', host + '/assets/imgs/shop/product-6-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-7-1.jpg', host + '/assets/imgs/shop/product-7-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-8-1.jpg', host + '/assets/imgs/shop/product-8-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Cream',
        description: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        starRate: 2,
        mark: 'Tyson',
        price: 22.85,
        discount: 24.8,
        class: '',
      },
    ];
    let popularProductVegetable = [
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-11-1.jpg', host + '/assets/imgs/shop/product-11-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-12-1.jpg', host + '/assets/imgs/shop/product-12-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-14-1.jpg', host + '/assets/imgs/shop/product-14-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-15-1.jpg', host + '/assets/imgs/shop/product-15-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-16-1.jpg', host + '/assets/imgs/shop/product-16-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-7-1.jpg', host + '/assets/imgs/shop/product-7-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-8-1.jpg', host + '/assets/imgs/shop/product-8-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Cream',
        description: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        starRate: 2,
        mark: 'Tyson',
        price: 22.85,
        discount: 24.8,
        class: '',
      },
    ];
    let popularProductFruit = [
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
        image: [host + '/assets/imgs/shop/product-2-1.jpg', host + '/assets/imgs/shop/product-2-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-3-1.jpg', host + '/assets/imgs/shop/product-3-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-4-1.jpg', host + '/assets/imgs/shop/product-4-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-5-1.jpg', host + '/assets/imgs/shop/product-5-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-6-1.jpg', host + '/assets/imgs/shop/product-6-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-7-1.jpg', host + '/assets/imgs/shop/product-7-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-8-1.jpg', host + '/assets/imgs/shop/product-8-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
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
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Cream',
        description: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
        starRate: 2,
        mark: 'Tyson',
        price: 22.85,
        discount: 24.8,
        class: '',
      },
    ];
    let dealsOfTheDay = [
      {
        image: [host + '/assets/imgs/banner/banner-5.png'],
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        mark: 'NestFood',
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/banner/banner-6.png'],
        description: 'Perdue Simply Smart Organics Gluten Free',
        starRate: 4,
        mark: 'Old El Paso',
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/banner/banner-7.png'],
        description: 'Signature Wood-Fired Mushroom and Caramelized',
        starRate: 3,
        mark: 'Progresso',
        price: 12.85,
        discount: 13.8,
      },
      {
        image: [host + '/assets/imgs/banner/banner-8.png'],
        description: 'Simply Lemonade with Raspberry Juice',
        starRate: 3,
        mark: 'Yoplait',
        price: 15.85,
        discount: 16.8,
      },
    ];
    let topSelling = [
      {
        image: [host + '/assets/imgs/shop/thumbnail-1.jpg'],
        description: 'Nestle Original Coffee-Mate Coffee Creamer',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-2.jpg'],
        description: 'Nestle Original Coffee-Mate Coffee Creamer',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-3.jpg'],
        description: 'Nestle Original Coffee-Mate Coffee Creamer',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
    ];
    let trendingProducts = [
      {
        image: [host + '/assets/imgs/shop/thumbnail-4.jpg'],
        description: 'Organic Cage-Free Grade A Large Brown Eggs',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-5.jpg'],
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-6.jpg'],
        description: 'Naturally Flavored Cinnamon Vanilla Light Roast Coffee',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
    ];
    let recentlyAdded = [
      {
        image: [host + '/assets/imgs/shop/thumbnail-7.jpg'],
        description: 'Pepperidge Farm Farmhouse Hearty White Bread',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-8.jpg'],
        description: 'Organic Frozen Triple Berry Blend',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-9.jpg'],
        description: 'Oroweat Country Buttermilk Bread',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
    ];
    let topRated = [
      {
        image: [host + '/assets/imgs/shop/thumbnail-10.jpg'],
        description: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-11.jpg'],
        description: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
      {
        image: [host + '/assets/imgs/shop/thumbnail-12.jpg'],
        description: 'All Natural Italian-Style Chicken Meatballs',
        starRate: 4,
        price: 32.85,
        discount: 33.8,
      },
    ];
    let dailyFeatured = [
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-1-1.jpg', host + '/assets/imgs/shop/product-1-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 55,
        class: 'hot',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-5-1.jpg', host + '/assets/imgs/shop/product-5-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 65,
        class: 'sale',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-2-1.jpg', host + '/assets/imgs/shop/product-2-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 75,
        class: 'best',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-3-1.jpg', host + '/assets/imgs/shop/product-3-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 85,
        class: 'hot',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-4-1.jpg', host + '/assets/imgs/shop/product-4-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 95,
        class: 'hot',
      },
    ];
    let dailyPopular = [
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 55,
        class: 'hot',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-15-1.jpg', host + '/assets/imgs/shop/product-15-2.jpg'],
        article: 'Hodo Foods',
        description: 'All Natural Italian-Style Chicken Meatballs',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 65,
        class: 'sale',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-12-1.jpg', host + '/assets/imgs/shop/product-12-2.jpg'],
        article: 'Hodo Foods',
        description: 'Angie’s Boomchickapop Sweet and womnies',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 75,
        class: 'best',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-13-1.jpg', host + '/assets/imgs/shop/product-13-2.jpg'],
        article: 'Hodo Foods',
        description: 'Foster Farms Takeout Crispy Classic',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 85,
        class: 'hot',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-14-1.jpg', host + '/assets/imgs/shop/product-14-2.jpg'],
        article: 'Hodo Foods',
        description: 'Blue Diamond Almonds Lightly Salted',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 95,
        class: 'hot',
      },
    ];
    let dailyNewAdded = [
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-9-1.jpg', host + '/assets/imgs/shop/product-9-2.jpg'],
        article: 'Hodo Foods',
        description: 'Seeds of Change Organic Quinoa, Brown',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 55,
        class: 'hot',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-10-1.jpg', host + '/assets/imgs/shop/product-10-2.jpg'],
        article: 'Hodo Foods',
        description: 'All Natural Italian-Style Chicken Meatballs',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 65,
        class: 'sale',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-11-1.jpg', host + '/assets/imgs/shop/product-11-2.jpg'],
        article: 'Hodo Foods',
        description: 'Angie’s Boomchickapop Sweet and womnies',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 75,
        class: 'best',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-12-1.jpg', host + '/assets/imgs/shop/product-12-2.jpg'],
        article: 'Hodo Foods',
        description: 'Foster Farms Takeout Crispy Classic',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 85,
        class: 'hot',
      },
      {
        label: 'Hot',
        image: [host + '/assets/imgs/shop/product-13-1.jpg', host + '/assets/imgs/shop/product-13-2.jpg'],
        article: 'Hodo Foods',
        description: 'Blue Diamond Almonds Lightly Salted',
        starRate: 4,
        price: 28.85,
        discount: 32.8,
        sold: 95,
        class: 'hot',
      },
    ];
    let headerMenu = [
      {
        icon: '',
        text: 'Home',
        value: '#1',
        subMenu: [],
      },
      {
        icon: 'fi-rs-angle-down',
        text: 'Fruit & Vegetables ',
        value: '#1',
        subMenu: [
          {
            text: 'Meat & Poultry',
            value: '#1',
          },
          {
            text: 'Fresh Vegetables',
            value: '#2',
          },
          {
            text: 'Herbs & Seasonings',
            value: '#3',
          },
          {
            text: 'Cuts & Sprouts',
            value: '#4',
          },
          {
            text: 'Exotic Fruits & Veggies',
            value: '#5',
          },
          {
            text: 'Packaged Produce',
            value: '#6',
          },
        ],
      },
      {
        icon: 'fi-rs-angle-down',
        text: 'Breakfast & Dairy',
        value: '#1',
        subMenu: [
          {
            text: 'Milk & Flavoured Milk',
            value: '#1',
          },
          {
            text: 'Butter and Margarine',
            value: '#2',
          },
          {
            text: 'Eggs Substitutes',
            value: '#3',
          },
          {
            text: 'Marmalades',
            value: '#4',
          },
          {
            text: 'Sour Cream',
            value: '#5',
          },
          {
            text: 'Cheese',
            value: '#6',
          },
        ],
      },
      {
        icon: 'fi-rs-angle-down',
        text: 'Meat & Seafood',
        value: '#1',
        subMenu: [
          {
            text: 'Breakfast Sausage',
            value: '#1',
          },
          {
            text: 'Dinner Sausage',
            value: '#2',
          },
          {
            text: 'Chicken',
            value: '#3',
          },
          {
            text: 'Sliced Deli Meat',
            value: '#4',
          },
          {
            text: 'Wild Caught Fillets',
            value: '#5',
          },
          {
            text: 'Crab and Shellfish',
            value: '#6',
          },
        ],
      },
      {
        icon: '',
        text: 'Blog',
        value: '#1',
        subMenu: [],
      },
      {
        icon: '',
        text: 'Contact',
        value: '#1',
        subMenu: [],
      },
    ];
    let footerMenu = [
      {
        text: 'Company',
        value: '#1',
        subMenu: [
          {
            text: 'About Us',
            value: '#1',
          },
          {
            text: 'Delivery Information',
            value: '#2',
          },
          {
            text: 'Privacy Policy',
            value: '#3',
          },
          {
            text: 'Terms & Conditions',
            value: '#4',
          },
          {
            text: 'Contact Us',
            value: '#5',
          },
          {
            text: 'Support Center',
            value: '#6',
          },
          {
            text: 'Careers',
            value: '#6',
          },
        ],
      },
      {
        text: 'Account',
        value: '#1',
        subMenu: [
          {
            text: 'Sign In',
            value: '#1',
          },
          {
            text: 'View Cart',
            value: '#2',
          },
          {
            text: 'My Wishlist',
            value: '#3',
          },
          {
            text: 'Track My Order',
            value: '#4',
          },
          {
            text: 'Help Ticket',
            value: '#5',
          },
          {
            text: 'Shipping Details',
            value: '#6',
          },
          {
            text: 'Compare products',
            value: '#7',
          },
        ],
      },
      {
        text: 'Corporate',
        value: '#1',
        subMenu: [
          {
            text: 'Become a Vendor',
            value: '#1',
          },
          {
            text: 'Affiliate Program',
            value: '#2',
          },
          {
            text: 'Farm Business',
            value: '#3',
          },
          {
            text: 'Farm Careers',
            value: '#4',
          },
          {
            text: 'Our Suppliers',
            value: '#5',
          },
          {
            text: 'Accessibility',
            value: '#6',
          },
          {
            text: 'Promotions',
            value: '#7',
          },
        ],
      },
      {
        text: 'Popular',
        value: '#1',
        subMenu: [
          {
            text: 'Milk & Flavoured Milk',
            value: '#1',
          },
          {
            text: 'Butter and Margarine',
            value: '#2',
          },
          {
            text: 'Eggs Substitutes',
            value: '#3',
          },
          {
            text: 'Marmalades',
            value: '#4',
          },
          {
            text: 'Sour Cream and Dips',
            value: '#5',
          },
          {
            text: 'Tea & Kombucha',
            value: '#6',
          },
          {
            text: 'Cheese',
            value: '#7',
          },
        ],
      },
    ];
    let headerTopMenu = [
      { text: 'About Us', value: '#1' },
      { text: 'My Account', value: '#2' },
      { text: 'Wishlist', value: '#3' },
      { text: 'Order Tracking', value: '#4' },
    ];
    let headerTopInfo = [
      {
        text: 'Secure delivery without contacting the courier',
      },
      {
        text: 'Supper Value Deals - Save more with coupons',
      },
      {
        text: 'Trendy 25silver jewelry, save up 35% off today',
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
      dealsDay: dealsOfTheDay,
      topSell: topSelling,
      trendProduct: trendingProducts,
      recentAdded: recentlyAdded,
      topRatedProduct: topRated,
      dailyFeaturedProduct: dailyFeatured,
      dailyPopularProduct: dailyPopular,
      dailyNewAddedProduct: dailyNewAdded,
      categoryHeaderMenu: headerMenu,
      footerBottomMenu: footerMenu,
      headerTopSmartMenu: headerTopMenu,
      headerTopInfoMessage: headerTopInfo,
    };
  }
}
