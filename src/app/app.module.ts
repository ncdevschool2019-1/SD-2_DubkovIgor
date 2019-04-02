import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { HeaderComponent } from './header/header.component';
import { ConnectedServicesComponent } from './connected-services/connected-services.component';
import { SecurityComponent } from './security/security.component';
import { WalletComponent } from './wallet/wallet.component';
import { FaqComponent } from './faq/faq.component';
import { TopComponent } from './top/top.component';
import { ServicesComponent } from './services/services.component';
import { PersonalAccountComponent } from './modules/layout/components/personalAccount/personal-account/personal-account.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '/personal-account', component: PersonalAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    HeaderComponent,
    ConnectedServicesComponent,
    SecurityComponent,
    WalletComponent,
    FaqComponent,
    TopComponent,
    ServicesComponent,
    PersonalAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
