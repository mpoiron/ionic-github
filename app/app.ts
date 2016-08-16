import {Component} from '@angular/core';
import {provide} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

import {WPAPI_PROVIDERS, defaultWpApi} from 'wp-api-angular';

@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    providers: [
        WPAPI_PROVIDERS,
        defaultWpApi({
            baseUrl: 'http://localhost:4001/wordpress/wp-json',
            namespace: '/wp/v2'
    })]
})
export class MyApp {
    rootPage: any = HomePage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp);
