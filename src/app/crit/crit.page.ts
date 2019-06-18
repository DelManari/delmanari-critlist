import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-crit',
  templateUrl: './crit.page.html',
  styleUrls: ['./crit.page.scss'],
})
export class CritPage implements OnInit {

  items = [{
    text:'test',
    created:new Date(),
    pos:0,
  }];
  constructor(private afAuth: AngularFireAuth,private db:AngularFirestore,private alertCtrl:AlertController) { }

 ngOnInit(){
   
 }
}
