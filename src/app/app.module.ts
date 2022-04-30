import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './navbar/button/button.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about/about.component';
import { FactsComponent } from './facts/facts.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlockchainTutorialComponent } from './portfolio/blockchain-tutorial/blockchain-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SidebarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    BlockchainTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
