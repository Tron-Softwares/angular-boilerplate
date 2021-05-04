import { Injectable } from '@angular/core';
// import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public getToken(): String {
      let tok = localStorage.getItem('token');
      if(tok)
            return tok;
        else
            return '';
  }
  
}

