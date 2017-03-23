 
import { Component } from '@angular/core';
import { DetailsPage } from '../details/details'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[] = [];

  constructor(public navCtrl: NavController) {
    for(let i=0;i<10;i++){
      this.items.push( {
        name: 'chloe ' + i,
        data: i 
      })
    }
  }


  itemSelected(item) {
    this.navCtrl.push(DetailsPage, {item:item})
  }


}
