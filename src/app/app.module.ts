import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PhoneItemComponent } from './components/phone/phone-item/phone-item.component';
import { PhoneListComponent } from './components/phone/phone-list/phone-list.component';
import { HeaderComponent } from './components/misc/header/header.component';

import { routes } from './app.routes';
import { LoginComponent } from './components/misc/login/login.component';
import { PhoneFormComponent } from './components/phone/phone-form/phone-form.component';
import { UrlDirective } from './shared/validators/url.directive';
import { PhoneCreateComponent } from './components/phone/phone-create/phone-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneItemComponent,
    PhoneListComponent,
    HeaderComponent,
    LoginComponent,
    PhoneFormComponent,
    UrlDirective,
    PhoneCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
