import { Routes } from '@angular/router';
 
  import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ToDoComponent } from './Components/to-do/to-do.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },



  { path: 'todo', component: ToDoComponent,title:'TodoLocalData' },

  { path: '**', component: NotfoundComponent,title:'Not Found' },

 ];
