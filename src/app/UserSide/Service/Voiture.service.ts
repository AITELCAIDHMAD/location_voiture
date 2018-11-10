import { Injectable } from '@angular/core';
import { Voiture } from '../Entity/Voiture/Voiture';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LocationChercher} from "../Cherche_location/locationChercher.interface";
//-----------------------------------------------------------------------
@Injectable()
export class VoitureService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private commentsUrl = 'http://localhost:3000/api/voitures';

  getAllVoituresWithoutLimit() : Observable<Voiture[]> {

    // ...using get request
    return this.http.get(this.commentsUrl)
    // ...an                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d calling .json() on the response to return data
      .map(( res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  // Fetch all existing comments
  getAllVoitures(numberVoiture:number) : Observable<Voiture[]> {

    // ...using get request
    return this.http.get(this.commentsUrl+"/all/"+numberVoiture)
    // ...an                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d calling .json() on the response to return data
      .map(( res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getVoitureById(id:string) : Observable<Voiture> {

    // ...using get request
    return this.http.get(this.commentsUrl+"/"+id)
    // ...an                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d calling .json() on the response to return data
      .map(( res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  // Fetch all existing comments
  searchVoitures(body:LocationChercher) : Observable<Voiture[]>{
    console.log("----------searchVoitures 1----------");
    console.log(body);

    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option


    console.log("----------searchVoitures 2----------");
    console.log(body);




    return this.http.post(this.commentsUrl+"/search", body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Add a new comment
  addVoiture (body: Object): Observable<Voiture[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.commentsUrl, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Update a comment
  updateVoiture (body: Object): Observable<Voiture[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Delete a comment
  removeVoiture (id:string): Observable<Voiture[]> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
