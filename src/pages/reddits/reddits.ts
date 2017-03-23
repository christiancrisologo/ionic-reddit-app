import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditService } from "../../app/services/reddits.service";
import { DetailsPage } from "../details/details";

/*
  Generated class for the Reddits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items: any[];
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private redditService: RedditService) {
    this.getDefaults();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditsPage');
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.redditService.getPosts(this.category, this.limit).
      subscribe((resp) => {
        console.log('--', resp)
        this.items = resp && resp.data && resp.data.children && resp.data.children;
      })
  }


  getDefaults() {
    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }


  viewItem(item) {
    this.navCtrl.push(DetailsPage, { item: item });
  }

  changeCategory(category) {
    
    this.reload();
  }

}
