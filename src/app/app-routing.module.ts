import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StandardLayoutComponent } from './admin/layout/standard-layout/standard-layout.component';
import { MerchantViewComponent } from './admin/pages/merchant-view/merchant-view.component';
import { WelcomeComponent } from './admin/pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'merchants', component: MerchantViewComponent },
      { path: 'products', component: MerchantViewComponent },
      { path: 'orders', component: MerchantViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
