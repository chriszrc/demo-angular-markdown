import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownDemoComponent } from "./markdown-demo/markdown-demo.component";


const routes: Routes = [
  { path: '', redirectTo: '/markdown-demo', pathMatch: 'full' },
  { path: 'markdown-demo', component: MarkdownDemoComponent }
];

@NgModule({
  //TODO this was "forChild" by angular cli default, but that doesnt work anymore.....
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
