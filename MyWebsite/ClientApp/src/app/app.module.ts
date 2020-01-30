import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ScrollTopComponent } from './scroll-top-component/scroll-top.component';
import { AboutComponent } from './about/about.component';
import { ScrollService } from './Services/scroll.service';
import { OfferComponent } from './offer/offer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InViewDirective } from './Directives/in-view';
import { IterationPipe } from './Pipes/iteration.pipe';
import { ResumeService } from './Services/resume-service';
import { EmailService } from './Services/email-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ScrollTopComponent,
    NavbarComponent,
    SkillsComponent,
    AboutComponent,
    OfferComponent,
    PortfolioComponent,
    ContactComponent,
    InViewDirective,
    FooterComponent,
    IterationPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ScrollService, ResumeService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
