import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../environments/environment';

@Injectable()
export class AuthenticationService {

	readonly baseUrl = environment.baseUrl;
	user;

	constructor(private http: HttpClient) { 
		this.http.get<Object[]>(`${this.baseUrl}isLoggedIn`)
			.subscribe((data) => this.user = data ? data["_json"] : undefined );
	}

	get base(){
		return this.baseUrl;
	}

	get loggedInUser(){
		return this.user;
	}


	loginWithLinkedIn(){
		return this.http.get<Object[]>(`${this.baseUrl}auth/linkedin`);
	}

}
