import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
})
export class CastListComponent {
  @Input() cast: any[] = [];
}