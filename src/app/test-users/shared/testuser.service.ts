import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Testuser} from'./testuser.model'
 
@Injectable()
export class TestuserService {
  selectedTestUser : Testuser;
  testuserList : Testuser[];
  constructor(private http : Http) { }
 
  postTestUser(emp : Testuser){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:50116/api/Testusers',body,requestOptions).map(x => x.json());
  }
 
  putTestUser(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:50116/api/Testusers/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getTestUserList(){
    this.http.get('http://localhost:50116/api/Testusers')
    .map((data : Response) =>{
      return data.json() as Testuser[];
    }).toPromise().then(x => {
      this.testuserList = x;
    })
  }
 
  deleteTestUser(id: number) {
    return this.http.delete('http://localhost:50116/api/Testusers/' + id).map(res => res.json());
  }
}