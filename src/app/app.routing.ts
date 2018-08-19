import {Routes, RouterModule} from '@angular/router';
import {DescriptionComponent} from './description/description.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book/:bookId', component: DescriptionComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
