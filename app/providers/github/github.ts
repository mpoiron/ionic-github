import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubProvider {

    private hasNext = false;

    constructor(private http: Http) {}

    getRepositories(username: string, pageNo: number) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos?per_page=10&page=${pageNo}`)
                             .do(x => this.hasNext = x.headers.has('Link'));
        return repos;
    }
}