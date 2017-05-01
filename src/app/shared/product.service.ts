import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 4.5, '这是一个商品,后面是一段话', ['电子商务']),
    new Product(2, '第二个商品', 4.99, 2.5, '这是一个商品,后面是一段话', ['项目实战']),
    new Product(3, '第三个商品', 2.99, 1.5, '这是一个商品,后面是一段话', ['电子商务', '图书']),
    new Product(4, '第四个商品', 4.99, 2.5, '这是一个商品,后面是一段话', ['硬件设备', '项目实战']),
    new Product(5, '第五个商品', 3.99, 3.0, '这是一个商品,后面是一段话', ['电子商务', '项目实战']),
    new Product(6, '第六个商品', 2.99, 4.0, '这是一个商品,后面是一段话', ['图书', '项目实战'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-02-02 22:22:22", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-02-02 22:22:22", "张三", 2, "东西不错"),
    new Comment(3, 1, "2017-02-02 22:22:22", "张四", 4, "东西不错"),
    new Comment(4, 2, "2017-02-02 22:22:22", "张五", 3, "东西不错"),
    new Comment(5, 3, "2017-02-02 22:22:22", "张三", 5, "东西不错"),
    new Comment(6, 2, "2017-02-02 22:22:22", "李三", 4, "东西不错"),
    new Comment(7, 3, "2017-02-02 22:22:22", "张三", 3, "东西不错")
  ]

  constructor() {

  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}
export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
