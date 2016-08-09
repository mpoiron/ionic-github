import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubProvider {

    constructor(private http: Http) {}

        getRepositories(username) {
            let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
            return repos;
        }
}