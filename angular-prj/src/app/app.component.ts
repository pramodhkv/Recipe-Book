import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedTab = 'recipe';

  onNavigate(tab: string) {
    this.loadedTab = tab;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC7nmKr_0_qJ-C4UteEzLVZ7qiWKLSi9Qo",
      authDomain: "angular-recipe-book-587da.firebaseapp.com"
    });
  }
}
