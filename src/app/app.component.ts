import { Component } from '@angular/core';
import { GithubService } from "./github/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubService]
})
export class AppComponent {
  public searchText ;
public searchResult ;
public searchCount ;
  constructor(private githubService:GithubService){}

  ngOnInit(){
//     alert("component");
// var a="boopathyraj"
//  this.githubService.getUsers(a);
  }
onKeyup(event){
  // alert(JSON.stringify(event));
  
this.searchText=event.target.value;
alert(this.searchText);
}

getUsers(){
  alert("component");
  this.githubService.getUsers(this.searchText)
  .subscribe(
    res=>{
      alert("dsdsf"+JSON.stringify(res) );
      this.searchResult=res;
      this.searchCount=res.total_count;
    }
  );
}
}
