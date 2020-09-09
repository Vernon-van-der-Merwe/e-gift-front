import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MerchantViewComponent } from './admin/pages/merchant-view/merchant-view.component';
import { StandardLayoutComponent } from './admin/layout/standard-layout/standard-layout.component';
import { AdminTopNavComponent } from './admin/components/admin-top-nav/admin-top-nav.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { AdminSideNavComponent } from './admin/components/admin-side-nav/admin-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchantViewComponent,
    StandardLayoutComponent,
    AdminTopNavComponent,
    LoginComponent,
    AdminSideNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
