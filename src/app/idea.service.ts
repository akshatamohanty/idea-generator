import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../environments/environment';

@Injectable()
export class IdeaService {

  readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getIdeas(wordA: string, wordB: string){
  	return this.http.get<Object[]>(`${this.baseUrl}api/generate`, 
  			{
  				params: {wordA: wordA, wordB: wordB}
  			})
  }

}
