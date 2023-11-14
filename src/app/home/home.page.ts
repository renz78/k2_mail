import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
//import { Network, ConnectionStatus } from '@capacitor/network'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  networkStatus: any;

  constructor(private iab: InAppBrowser) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.routeApp();
    }, 1000);
  }

  // ionViewWillEnter(){
  //   //this.routeApp();
  // }

  // ionViewDidEnter(){
  //   //this.routeApp();
  // }

  routeApp(){
    //console.log(2222)
    this.openInAppBrowser();
  }

  
  
  
  openInAppBrowser(){
    const browser = this.iab.create(
      'https://mail.corp2.eu/',
      '_blank',
      {
        location: 'no',
        hidden: 'no',
        hardwareback: 'yes',
        toolbar: 'no',
        // toolbarposition: 'top',
        fullscreen: 'no',
      }
    );

    //window.open('https://debug9.corp2.net', "_system", "location=yes");

    // browser.executeScript(...);

    // browser.insertCSS(...);
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "a{color: red;!important" });
    // });

    // browser.close();
  }

}
