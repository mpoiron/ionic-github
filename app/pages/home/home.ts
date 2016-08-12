import {Component} from '@angular/core';
import 'rxjs/Rx';

import {WpApiPosts} from 'wp-api-angular';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [WpApiPosts]
})
export class HomePage {
    public posts;

    constructor(private wpPosts: WpApiPosts) {
        this.getPosts();
     }

    private getPosts() {

        this.wpPosts.getList({})
                    .subscribe(
                        data => this.posts = data.json(),
                        err => console.log(err),
                        () => console.log('End of posts request')
                    );
    }
}