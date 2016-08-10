import {Component} from '@angular/core';
import 'rxjs/Rx';
import {GithubProvider} from '../../providers/github/github';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [GithubProvider]
})
export class HomePage {
    public repositories;
    public pageNo = 1;
    public username = '';
    
    constructor(private github: GithubProvider) { }

    getRepos() {
        this.github.getRepositories(this.username, this.pageNo)
            .subscribe(
            data => {
                this.repositories = data.json();
            },
            err => console.error(err),
            () => console.log('Finished getting repositories')
        );
    }

    getNext() {

    }
}