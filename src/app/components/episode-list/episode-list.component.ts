import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
})
export class EpisodeListComponent {
  @Input() episodes: any[] = [];
}