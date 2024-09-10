import { Component, OnInit } from '@angular/core';
import { ApiNinjasService } from '../api-ninjas.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss'
})
export class MenComponent implements OnInit{
  
  data : any[] = [];
  loading : boolean = true;
  error : boolean = false;

  constructor(private apiServiceNinjas: ApiNinjasService){}

  ngOnInit(): void {
      this.fetchData();
  }

  fetchData(){
    this.apiServiceNinjas.getData().subscribe(
      (data) =>{
          this.data = data
      },
      (error)=>{
         console.log('', error);
      }
    );

    setTimeout(()=>{
      this.loading = false;
    },5000)
  }
}
