import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';

import {Config} from '../../config';

@Injectable()
export class WpApi {

  constructor(private http: Http) {}

  getPost(id: number, options?: IRequestOptions) {

      if (options == null) {
          options = {
              retry: 0
          };
      }

      return this.http
                    .get(`${Config.api.postsUrl}/${id}`)
                    .retry(options.retry);
  }

  getPosts(options?: IRequestOptions) {

      if (options == null) {
          options = {
              retry: 0
          };
      }

      return this.http
                    .get(Config.api.postsUrl)
                    .retry(options.retry);
  }
}

export interface IRequestOptions {
    retry: number;
}