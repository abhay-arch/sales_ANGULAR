import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  name : String = "teena";
  s1: Salesperson = new Salesperson("Arun","pawar","arrun@gmail.com",2876,"200");

salesList :Salesperson[] = [
                              this.s1,
                              new Salesperson("Arun","pawar","arrun@gmail.com",34000,"200"),
                              new Salesperson("varun","kumar","varun@gmail.com",1200,"200"),
                              new Salesperson("shital","jitakar","shital@gmail.com",34000,"200"),
                              new Salesperson("monika","jangid","monika@gmail.com",34000,"200"),
                              new Salesperson("krutika","satange","krutika@gmail.com",2700,"200")
                          ]
formModel : Salesperson=new Salesperson("","","",0,"");


  constructor() { }

  ngOnInit(): void {

    // console.log(this.formModel)
    // this.salesList.push(this.formModel);
  }
  onSubmit()
  {
    this.salesList.push(this.formModel);
  }

}
