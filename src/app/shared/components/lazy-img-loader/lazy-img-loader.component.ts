import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-img-loader',
  templateUrl: './lazy-img-loader.component.html',
  styleUrls: ['./lazy-img-loader.component.scss']
})
export class LazyImgLoaderComponent {
  @Input() public url!: string;
  @Input() public alt: string = 'No name';
  
  protected hasLoaded: boolean = false;
  
  ngOnInit(): void {
    if (!this.url) throw new Error('url is required');    
  }

  protected onLoad(){
    this.hasLoaded = true;
  }
}
