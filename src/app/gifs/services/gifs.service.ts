import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, GifData } from '../interfaces/serviceResponse.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
    private apiKey: string = 'hedfNKj3P0iGuWXWS3S9bZdoKeOMLI9M';

    public gifsList: Gif[] = [];

    private _tagsHistory: string[] = [];

    constructor(private http: HttpClient ) {
        this.loadLocalStorage();
    }
    
    get tagsHistory(){
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string){

        tag.toLowerCase();

        if (this._tagsHistory.includes(tag)){
            this._tagsHistory = this.tagsHistory.filter( (oldTag) => oldTag !== tag );
        };

        this._tagsHistory.unshift( tag );
        this._tagsHistory = this._tagsHistory.slice(0,10);
        this.saveLocalStorage();
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify( this._tagsHistory ))
    }

    private loadLocalStorage(): void {
        if ( !localStorage.getItem('history') ) return;

        this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

        if ( this._tagsHistory.length === 0) return;
        this.searchTag(this._tagsHistory[0]);
    }

    public searchTag( tag: string): GifData | void {
        if (tag.length === 0) return ;
        this.organizeHistory( tag );
        const params = new HttpParams()
            .set( 'apiKey', this.apiKey )
            .set( 'limit', '10' )
            .set( 'q', tag );
        
        this.http.get<GifData>(`${this.serviceUrl}/search`, { params })
            .subscribe(
                resp => {
                    this.gifsList = resp.data;
                }
            )
    }
}