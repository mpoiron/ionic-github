import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {NavController} from 'ionic-angular';
import {SpinnerDialog} from 'ionic-native';

import {WpPost} from '../../providers/wordpress/post';
import {WpApi} from '../../providers/wordpress/api';

import {PostPage} from '../post/post';

@Component({
    templateUrl: 'build/pages/posts/posts.html',
    providers: [WpApi]
})
export class PostsPage {
    posts: any[] = [];
    isLoading = false;

    constructor(private wpApi: WpApi, private navCtrl: NavController) {
        this.getPosts();
     }

    private getPosts() {
        this.isLoading = true;
        SpinnerDialog.show('', 'Loading...', null, null);

        this.wpApi.getPosts({ retry: 2 })
                        .finally<Response>(() => {
                            this.isLoading = false;
                            SpinnerDialog.hide();
                        })
                        .subscribe(
                            data => data.json().map(post => {
                                        this.posts.push(WpPost.fromApi(post));
                                    }),
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