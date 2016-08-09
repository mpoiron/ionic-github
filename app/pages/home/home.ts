import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {GithubProvider} from '../../providers/github/github';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [GithubProvider]
})
export class HomePage {
    public foundRepos;
    public username: string = '';
    
    private getReposObservable: Observable<any>;

    constructor(private github: GithubProvider) {

        this.getReposObservable = Observable.interval(5000)
            .flatMap(() => {
                return this.github.getRepositories(this.username);
            });
    }

    getRepos() {
        this.getReposObservable.subscribe(data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('Finished getting repositories')
        );
    }
}
