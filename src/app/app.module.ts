import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './home/navbar/button/button.component';
import { SidebarComponent } from './home/navbar/sidebar/sidebar.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { AboutComponent } from './home/about/about/about.component';
import { FactsComponent } from './home/facts/facts.component';
import { SkillsComponent } from './home/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './home/resume/resume.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { BlockchaintutorialComponent } from './projects/blockchaintutorial/blockchaintutorial.component';

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
    HomeComponent,
    BlockchaintutorialComponent
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
