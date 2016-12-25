import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './components/application/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { PageNotFoundComponent } from './components/404/404.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: '**' , component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ApplicationRoutingModule { }