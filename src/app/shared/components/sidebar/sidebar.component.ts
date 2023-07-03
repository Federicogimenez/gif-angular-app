import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService){}

  get tagsHistoryService(): string[] {
    return this.gifsService.tagsHistory
  }

  public reloadGif = ( value: string): void => {
    this.gifsService.searchTag( value );
  }
}