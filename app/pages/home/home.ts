import {Component} from '@angular/core';
import {GithubProvider} from '../../providers/github/github';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GithubProvider]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GithubProvider) {
  }

  getRepos() {
    this.github.getRepositories(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('Finished getting repositories')
    );
  }
}
