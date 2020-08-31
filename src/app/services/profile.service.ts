import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private apiKey:'68aa9ea0e237964fa8c82f06ddf8fafbe2d2337a';
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
