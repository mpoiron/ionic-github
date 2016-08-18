import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {NavController} from 'ionic-angular';
import {SpinnerDialog} from 'ionic-native';

import {WpApiPosts} from 'wp-api-angular';
import {PostPage} from '../post/post'; 

@Component({
    templateUrl: 'build/pages/posts/posts.html',
})
export class PostsPage {
    posts: [any];
    isLoading = false;

    constructor(private wpPosts: WpApiPosts, private navCtrl: NavController) {
        this.getPosts();
     }

    private getPosts() {
        this.isLoading = true;
        SpinnerDialog.show('', 'Loading...', null, null);

        this.wpPosts.getList()
                    .retry(2)
                    .finally<Response>(() => {
                        this.isLoading = false;
                        SpinnerDialog.hide();
                    })
                    .subscribe(
                        data => this.posts = data.json(),
                        err => console.log(err)
                    );
    }

    private openPost(id: number, post?: any) {
        this.navCtrl.push(PostPage, {
            id: id,
            post: post,
        });
    }
}