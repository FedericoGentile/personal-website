import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainTutorialComponent } from './portfolio/blockchain-tutorial/blockchain-tutorial.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }