import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { RedditsPage } from '../pages/reddits/reddits';
import {RedditService} from "./services/reddits.service";
import {DetailsPage} from "../pages/details/details";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    SettingPage,
    RedditsPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    SettingPage,
    RedditsPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RedditService]
})
export class AppModule {}
