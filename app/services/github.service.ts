import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'ea554416e0f00e606ca7';
  private client_secret = '9b1c1f59578aafe7f25c9a1e95762a7ebd478b90';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'mahadyhasan';
  }

  getUser() {
    //noinspection TypeScriptUnresolvedFunction
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepo() {
    //noinspection TypeScriptUnresolvedFunction
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }

}
