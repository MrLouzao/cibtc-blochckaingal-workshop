import { Injectable } from '@angular/core';
import { Observable,  of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TraceabilityService {

  constructor() { }

  private products = [
    {id: "ERC23658", lastState: "Non ten ultimo estado jeje"},
    {id: "RTG55587", lastState: "Enviado"}
  ];


  getAllProducts(): Observable<any> {
    // Mocked up
    return of(this.products);
  }
}
