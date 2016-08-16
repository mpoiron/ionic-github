import {Component, ViewChild, provide} from '@angular/core';
import {Platform, MenuController, Nav, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AboutPage} from './pages/about/about';

import {WPAPI_PROVIDERS, defaultWpApi} from 'wp-api-angular';

@Component({
    templateUrl: 'build/app.html',
    providers: [
        WPAPI_PROVIDERS,
        defaultWpApi({
            baseUrl: 'http://localhost:4001/wordpress/wp-json',
            namespace: '/wp/v2'
    })]
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;

    pages: any = [
        { title: 'Home', component: HomePage},
        { title: 'About', component: AboutPage}
    ];
    rootPage: any = HomePage;

    constructor(platform: Platform, private menu: MenuController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        this.menu.close();
        this.nav.setRoot(page.component);    
    }
}

ionicBootstrap(MyApp);
