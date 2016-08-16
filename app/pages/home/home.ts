import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {WpApiPosts} from 'wp-api-angular';
import {PostPage} from '../post/post'; 

@Component({
    templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
    posts: [any];
    isLoading = false;

    constructor(private wpPosts: WpApiPosts, private navCtrl: NavController) {
        this.getPosts();
     }

    private getPosts() {
        this.isLoading = true;
        this.wpPosts.getList()
                    .subscribe(
                        data => this.posts = data.json(),
                        err => console.log(err),
                        () => this.isLoading = false
                    );
    }

    private openPost(id: number, post?: any) {
        this.navCtrl.push(PostPage, {
            id: id,
            post: post,
        });
    }
}