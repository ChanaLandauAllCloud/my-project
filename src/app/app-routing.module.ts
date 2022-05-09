import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'hello/:id',component:HelloComponent},
  {path:'',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
