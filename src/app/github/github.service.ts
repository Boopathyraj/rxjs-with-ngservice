import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map' ;

@Injectable()
export class GithubService {

  constructor(private http:Http ) {}

  getUsers(searchText):Observable<any>  {
    // const searchText='js';
    const url='http://api.github.com/search/users?q='+searchText;
    return this.http.get(url).map (
      res=>{
        const data=res.json();
        //  alert(JSON.stringify( data));
        console.log(data);
        return data;
      }
    )
  }

}
