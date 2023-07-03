import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input 
      type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #searchTagInput
    >
  `,
})
export class SearchBoxComponent {

  @ViewChild( 'searchTagInput' )
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService){}

  searchTag(){

    let newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    
    this.tagInput.nativeElement.value = '';

  }
}
