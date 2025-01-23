import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from 'express';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //Creer un candidat

  createCandidat(Candidat: any ):Observable<any> {
    return this.http.post<any>(this.apiUrl+'/candidats', Candidat);
  }

  //Lister les candidats
  getCandidats():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/candidats');
  }

  //Supprimer un candidat par id
  deleteCandidat(id:number):Observable<void> {
    return this.http.delete<void>(this.apiUrl+'/candidats/'+id);
  }
}
