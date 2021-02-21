import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  readonly API_URL = 'http://localhost:3000';
  user: any = {};

  constructor(
    private http: HttpClient
  ) {
   }

  ngOnInit() {

  }

  /* when user clicks on sign in button */
  signIn() {

    this.http.post(this.API_URL + '/login', this.user)
      .subscribe((res) => {
        console.log("Login Response *** ", res);
        if(res['token']){
            localStorage.setItem('token', res['token']);// token stored in local storage

          }
      },
      (err) => {
        console.log(' ***** Error login *** ', err);
      });
   
  }

  getProducts() {
    this.http.get(this.API_URL + '/products')    
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );       
  }

}
