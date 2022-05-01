import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BlockchaintutorialComponent } from './projects/blockchaintutorial/blockchaintutorial.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "blockchain", component:BlockchaintutorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }