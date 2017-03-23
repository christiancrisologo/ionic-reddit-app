
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/RX';

@Injectable()

export class RedditService{
    http:any;
    baseUrl:string = "https://reddit.com";

    constructor(private _http:Http){

    }


    getPosts(category, limit){
        return this._http.get(`${this.baseUrl}/r/${category}/top.json?limit=${limit}`)
        .map(res=>{
            return res.json();
        });
    }
}
