import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {NavController, NavParams} from 'ionic-angular';
import {SpinnerDialog} from 'ionic-native';

import {WpApiPosts} from 'wp-api-angular';

@Component({
  templateUrl: 'build/pages/post/post.html',
})
export class PostPage {
    id: number;
    post: any;
    isLoading = false;

    constructor(private wpPosts: WpApiPosts, private navCtrl: NavController, private params: NavParams) {
        this.id = params.get('id');
        this.post = params.get('post');

        if (!this.post) {
            this.getPost(this.id);
        }
    }

    getPost(id: number) {
        this.isLoading = true;
        SpinnerDialog.show('', 'Loading...', null, null);

        this.wpPosts.getList()
                    .retry(2)
                    .finally<Response>(() => {
                        this.isLoading = false;
                        SpinnerDialog.hide();
                    })
                    .subscribe(
                        data => this.post = data.json(),
                        err => console.log(err)
                    );
    }
}