import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandingComponent } from './landing/landing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UpdateEventsComponent } from './admin/update-events/update-events.component';
import { UpdateScoreComponent } from './admin/update-score/update-score.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RegisterContingentComponent } from './register-contingent/register-contingent.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.gaurd';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { AdminEventComponent } from './admin/admin-event/admin-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatCardModule} from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ToastrModule } from 'ngx-toastr';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
// import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { A11yModule } from '@angular/cdk/a11y';
import { MembersComponent } from './register-contingent/members/members.component';
// import { LandingComponent } from './landing/landing.component';
import { RegisterMessageComponent } from './register-message/register-message.component';
import { LoginBoxComponent } from './login/login-box/login-box.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { TeamComponent } from './team/team.component';
import { BrochureComponent } from './brochure/brochure.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    LandingComponent,
    AppComponent,
    GalleryComponent,
    SponsorsComponent,
    LoginComponent,
    AdminComponent,
    AdminLoginComponent,
    UpdateEventsComponent,
    UpdateScoreComponent,
    EventsComponent,
    EventDetailsComponent,
    RegisterContingentComponent,
    AccomodationComponent,
    AddMemberComponent,
    RegisterComponent,
    RegisterMessageComponent,
    AdminEventComponent,
    MembersComponent,
    RegisterMessageComponent,
    LoginBoxComponent,
    MembersComponent,
    RegisterMessageComponent,
    LoginBoxComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TeamComponent,
    BrochureComponent,
    LeaderboardComponent,



  ],
  imports: [
    NgxUsefulSwiperModule,
    BrowserAnimationsModule,
    A11yModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    CarouselModule,
    NgxUsefulSwiperModule,
    ToastrModule.forRoot({
      timeOut:6000,
      positionClass: 'toast-bottom-center',
    }),
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: 'AIzaSyCouH_aSTlsPSDW6IaDDEsODw7OOWL6z68',
    },
    GoogleSheetsDbService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('176413549611-9cf4leebtm3p74j2e73ol1h6runlfbko.apps.googleusercontent.com')
          }],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }





