import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';

const characterAttributesMapping = {
  name: 'Name',
  matches: 'Matches',
  wins:'Wins',
  losses:'Losses',
  points:'Points'
};
interface Character {
  name: string;
  matches: number;
  wins:number;
  losses:number;
  points:number;
}


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  characters$!: Observable<Character[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.get<Character>('1ybuOiQYlotICYkwjMT3pY01sC3mwkgGySL4IVcT0H3k', "Characters", characterAttributesMapping);
    this.characters$.subscribe(res => console.log(res));
  }

}
