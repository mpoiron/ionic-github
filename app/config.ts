interface IApiConfig {
    baseUrl: string;
    postsUrl: string;
}

export class Config {

    private static apiBaseUrl = 'http://localhost:4001/wordpress/wp-json/wp/v2';

    static api: IApiConfig = {
        baseUrl: Config.apiBaseUrl,
        postsUrl: Config.apiBaseUrl + '/posts' 
    };
}