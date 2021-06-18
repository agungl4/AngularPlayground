import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { ContentComponent } from './pages/home/content/content.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id'; 
registerLocaleData(localeId, 'id'); 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, SharedModule, CommonModule
  ],
  providers: [    { provide: LOCALE_ID, useValue: "id-ID" },  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
