import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from'@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page-components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component'; 
import { SignInPageComponent } from './auth-page-components/sign-in-page/sign-in-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDataClientService } from './services/store-data-client-service.service';
import { ProductDetailsComponent } from './product-page-components/product-details/product-details.component';
import { ProductGridComponent } from './prod-info-display-components/product-grid/product-grid.component';
import { SignUpPageComponent } from './auth-page-components/sign-up-page/sign-up-page.component';
import { DashboardPageComponent } from './dashboard-page-components/dashboard-page/dashboard-page.component';
import { PasswordUpdateComponent } from './dashboard-page-components/password-update/password-update.component';
import { SignedOutPageComponent } from './auth-page-components/signed-out-page/signed-out-page.component';
import { PhNumUpdateComponent } from './dashboard-page-components/ph-num-update/ph-num-update.component';
import { EmailUpdateComponent } from './dashboard-page-components/email-update/email-update.component';
import { ShipAddrUpdateComponent } from './dashboard-page-components/ship-addr-update/ship-addr-update.component';
import { ReviewListDisplayComponent } from './product-page-components/review-list-display/review-list-display.component';
import { POSTProductReviewComponent } from './product-page-components/postproduct-review/postproduct-review.component';
import { StarscoreselectorComponent } from './product-page-components/starscoreselector/starscoreselector.component';
import { StarScoreDisplayComponent } from './prod-info-display-components/star-score-display/star-score-display.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ContactPageComponent,
    SignInPageComponent,
    CartPageComponent,
    SearchPageComponent,
    ProductDetailsComponent,
    ProductGridComponent,
    SignUpPageComponent,
    DashboardPageComponent,
    PasswordUpdateComponent,
    SignedOutPageComponent,
    PhNumUpdateComponent,
    EmailUpdateComponent,
    ShipAddrUpdateComponent,
    ReviewListDisplayComponent,
    POSTProductReviewComponent,
    StarscoreselectorComponent,
    StarScoreDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatRippleModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', component : HomePageComponent },
      { path : 'contactUs', component : ContactPageComponent },
      { path : 'signIn', component : SignInPageComponent },
      { path : 'myCart', component : CartPageComponent },
      { path : 'search', component : SearchPageComponent },
      { path : 'products/:productId', component : ProductDetailsComponent},
      { path : 'signUp', component : SignUpPageComponent},
      { path : 'dashboard', component : DashboardPageComponent },
      { path : 'passChange', component : PasswordUpdateComponent },
      { path : 'mailChange' , component : EmailUpdateComponent },
      { path : 'addrChange', component : ShipAddrUpdateComponent},
      { path : 'phoneChange', component : PhNumUpdateComponent}
    ]),
  HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
