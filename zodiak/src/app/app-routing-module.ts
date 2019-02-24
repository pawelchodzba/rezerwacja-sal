import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './contact-list/list/list.component';
import { Route } from '@angular/router';
import { ContactDetailsComponent } from './contact-list/contact-details/contact-details.component';
import { EditContactComponent } from './contact-list/edit-contact/edit-contact.component';
import { PhotoComponent } from './shared/photo/photo.component';

export const APP_ROUTES: Route[] = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients' , component: <any>ListComponent, children: [
      { path: 'details/:id', component: <any>ContactDetailsComponent},
      { path: 'edit/:id', component: <any>EditContactComponent},
  ]},
  { path: 'clients/photo/:id', component: <any>PhotoComponent }
  // { path: 'details/:id' , component: <any>ContactDetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
