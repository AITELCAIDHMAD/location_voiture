import { Injectable } from '@angular/core';
import { Location } from '../Entity/Locations/Location';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//-----------------------------------------------------------------------
@Injectable()
export class LocationService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private commentsUrl = 'http://localhost:3000/api/locations';

  // Fetch all existing comments
  getAllLocations() : Observable<Location[]> {
    // ...using get request
    return this.http.get(this.commentsUrl)
    // ...an                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d calling .json() on the response to return data
      .map(( res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  getLocationById(id:string) : Observable<Location> {
    // ...using get request
    return this.http.get(this.commentsUrl+"/"+id)
    // ...an                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d calling .json() on the response to return data
      .map(( res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  // Add a new comment
  addLocation (body: Object): Observable<Location[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.commentsUrl, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Update a comment
  updateLocation (body: Object): Observable<Location[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Delete a comment
  removeLocation (id:string): Observable<Location> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
