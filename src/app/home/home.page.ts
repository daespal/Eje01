import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos=[];

  constructor() {
  this.photos = [
    {
      name: "Foto 1",
      description: "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
      url: "https://picsum.photos/id/237/200/300"
    },
    {
      name: "Foto 2",
      description: "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
      url: "https://picsum.photos/id/238/200/300"
    },
    {
      name: "Foto 3",
      description: "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
      url: "https://picsum.photos/id/239/200/300"
    },
    {
      name: "Foto 4",
      description: "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.",
      url: "https://picsum.photos/id/240/200/300"
    }
  ]
}
}
