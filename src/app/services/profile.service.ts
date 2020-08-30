import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private apiKey:'8c5516fc6b8865378fdaa6e43b6f757d8a4828a3';
  constructor( private http:HttpClient) {
    console.log("Service is now ready");
    this.username = 'wikky2012';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?apiKey=" + this.apiKey)
     
   }
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?apiKey=" + this.apiKey)
   }
   updateProfile(username:string){
     this.username = username;
   }
}
