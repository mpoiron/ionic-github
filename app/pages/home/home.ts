import {Component} from '@angular/core';
import 'rxjs/Rx';

import {WpApiPosts} from 'wp-api-angular';

@Component({
    templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
    posts: [any];
    isLoading = false;

    constructor(private wpPosts: WpApiPosts) {
        this.getPosts();
     }

    private getPosts() {

        this.isLoading = true;
        this.wpPosts.getList({})
                    .subscribe(
                        data => this.posts = data.json(),
                        err => console.log(err),
                        () => this.isLoading = false
                    );
    }
}