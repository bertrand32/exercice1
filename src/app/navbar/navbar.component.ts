import { Component } from '@angular/core';
import { ApiNinjasService } from '../api-ninjas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  data : any; 
  
  constructor(private apiServiceNinjas: ApiNinjasService){}

  fetchData(){
    this.apiServiceNinjas.getData().subscribe(
      response =>{
        this.data = response;
        console.log(this.data)
      },
      
      error =>{
        console.log('Error fetching data', error);
      }
      
    );
  }
}
