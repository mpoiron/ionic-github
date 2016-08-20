import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {WpApi} from '../../providers/wordpress/api';
import {IWpPost} from '../../providers/wordpress/post';

@Component({
    templateUrl: 'build/pages/home/home.html',
    providers: [WpApi]
})
export class HomePage {
    lastPost: IWpPost;

    constructor(private wordpress: WpApi, private navCtrl: NavController) {
    }

    getLastPost() {
        this.wordpress.getPosts({ retry: 2 })
                        .flatMap(data => data.json())
                        .first()
                        .do(data => this.lastPost = <IWpPost>data);
    }
}