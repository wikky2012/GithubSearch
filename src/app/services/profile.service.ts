import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private apiKey:'b0c95ddd552a889048079a59b67e8984eb855522';
  constructor( private http:HttpClient) {
    console.log("Service is now ready");
    this.username = 'wikky2012';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?apiKey=" + this.apiKey)
     
   }
}
