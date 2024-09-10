import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {
  

  mainImageUrl = '/image/images 5.jpeg';
  image1Url = '/image/images 5.jpeg'; 
  image2Url = '/image/download 1.jpeg';
  image3Url = '/image/download 2.jpeg';
  image4Url = '/image/images.jpeg';

  changeMainImage(imageUrl : string){
       this.mainImageUrl = imageUrl;
  }

  count = 0

  decrement(){
    this.count --;
  }

  increment(){
    this.count ++;
  }
}
