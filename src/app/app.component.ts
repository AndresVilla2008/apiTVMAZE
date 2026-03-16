import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../app/services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  show: any;
  episodes: any[] = [];
  cast: any[] = [];

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {

    this.showsService.getShowDetail()
      .subscribe(data => this.show = data);

    this.showsService.getEpisodes()
      .subscribe(data => this.episodes = data);

    this.showsService.getCast()
      .subscribe(data => this.cast = data);
  }
}