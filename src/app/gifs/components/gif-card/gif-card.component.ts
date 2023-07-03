import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/serviceResponse.interface';

@Component({
  selector: 'gifs-gif-card',
  templateUrl: './gif-card.component.html'
})
export class GifCardComponent implements OnInit{
  @Input() 
  public gif!: Gif;
  
  ngOnInit(): void {
    console.log(this.gif);
  }
}
