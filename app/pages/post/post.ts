import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {NavController, NavParams} from 'ionic-angular';
import {SpinnerDialog} from 'ionic-native';

import {WpPost} from '../../providers/wordpress/post';
import {WpApi} from '../../providers/wordpress/api';

@Component({
  templateUrl: 'build/pages/post/post.html',
  providers: [WpApi]
})
export class PostPage {
    id: number;
    post: any;
    isLoading = false;

    constructor(private wpApi: WpApi, private navCtrl: NavController, private params: NavParams) {
        this.id = params.get('id');
        this.post = params.get('post');

        if (!this.post) {
            this.getPost(this.id);
        }
    }

    getPost(id: number) {
        this.isLoading = true;
        SpinnerDialog.show('', 'Loading...', null, null);

        this.wpApi.getPost(id, { retry: 2 })
                        .finally<Response>(() => {
                            this.isLoading = false;
                            SpinnerDialog.hide();
                        })
                        .subscribe(
                            data => this.post = WpPost.fromApi(data.json()),
                            err => console.log(err)
                        );
    }
}