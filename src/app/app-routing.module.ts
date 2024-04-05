import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { RegisterContingentComponent } from './register-contingent/register-contingent.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminEventComponent } from './admin/admin-event/admin-event.component';
import { AuthGuard } from './auth.gaurd';
import { MembersComponent } from './register-contingent/members/members.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterMessageComponent } from './register-message/register-message.component';
import { LoginBoxComponent } from './login/login-box/login-box.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { TeamComponent } from './team/team.component';
import { RegisterComponent } from './register/register.component';
import { BrochureComponent } from './brochure/brochure.component';

const routes: Routes = [
  // { path: 'about', component: AboutUsComponent },
  { path: '', component: LandingComponent },

  { path: 'sponsors', component: SponsorsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'events', component: EventsComponent },
  // { path : '/', component: LandingComponent},
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'accommodation', component: AccomodationComponent },
  { path: 'leaderboard', component: LandingComponent },
  // { path: 'login', component: LoginBoxComponent },
  // { path: 'register-contingent', component: RegisterContingentComponent },
  // { path: 'register-event', component: RegisterEventComponent },
  // { path: 'add-member', component: AddMemberComponent },
  // { path: 'rcn', component: MembersComponent },
  // { path: 'sportwise-events', component: SportwiseEventsComponent },
  // { path: 'reg-message', component: RegisterMessageComponent },
  // { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'brochure', component: BrochureComponent },
  {
    path: 'admin',
    component: AdminComponent,


    children: [
      { path: 'login', component: AdminLoginComponent },
      { path: 'event', component: AdminEventComponent },
      { path: '', component: AdminComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
