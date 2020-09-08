import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MerchantViewComponent } from './admin/pages/merchant-view/merchant-view.component';
import { StandardLayoutComponent } from './admin/layout/standard-layout/standard-layout.component';
import { AdminTopNavComponent } from './admin/components/admin-top-nav/admin-top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchantViewComponent,
    StandardLayoutComponent,
    AdminTopNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
