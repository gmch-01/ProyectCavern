import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './Shared/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MatdashboComponent } from './matdashbo/matdashbo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NgChartsModule } from 'ng2-charts';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http'

import { UsuariosService } from './services/usuarios.service';
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MatdashboComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    NgChartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AppService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
