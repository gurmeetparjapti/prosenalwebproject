import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  [x: string]: any;
  // url="https://beckend-w3l1.onrender.com";
  url = "http://localhost:8080";
  httpClient: any;
  ids: any;
  constructor(public http: HttpClient, public routs: ActivatedRoute) { }
  insertrecord(data:any): Observable<any> {
    return this.http.post(this.url+ "/create",data);
  }
  getmyalldata() {
    return this.http.get(this.url+"/getdata");
  }
  getmydata(){
    return this.http.get(this.url+"/contactapidata")
  }
  // mydata() {
  //   return this.http.get(this.url);
  // }
 // contactpost
 contactapi(data:any): Observable<any> {
  return this.http.post(this.url+ "/contatdata",data);
}
  //view api
  singledata(id: any) {
    let ids = id;
    return this.http.get(this.url + "/view/" + `${ids}`);
  }
  //delete api
  mydelete(id: any) {
    let ids = id;
    return this.http.delete(this.url +"/deleterecord/"+`${ids}`)
  }
  //update api call
  updatedata(data:any,id:any):Observable<any>
  {
    let ids = id;
    return this.http.post(this.url+"/updaterecord/"+`${ids}`,data);
  }
//singleuser api for get api for update data
singleuser(id:any)
{
  let ids = id;
  return this.http.get(`${this.url+"/singledatas/"}${ids}`)
}

//login user  
loginuser(data:any):Observable<any>
{
  return this.http.post(`${this.url}/login`,data);
}
//hiringaplly

gethiring(){
  return this.http.get(this.url+"/hiringapi")
}

hiringapi(data:any): Observable<any> {
return this.http.post(this.url+ "/hiring",data);
}
}


