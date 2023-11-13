import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"airsoftxperience-b8798","appId":"1:461194881135:web:1f441de392d13c484bc59a","storageBucket":"airsoftxperience-b8798.appspot.com","apiKey":"AIzaSyCLVxF8d4_F4-8JLOnt7kn9vpR_ni0hrRE","authDomain":"airsoftxperience-b8798.firebaseapp.com","messagingSenderId":"461194881135"})), provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
