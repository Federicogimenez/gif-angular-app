import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImgLoaderComponent } from './components/lazy-img-loader/lazy-img-loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImgLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazyImgLoaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
