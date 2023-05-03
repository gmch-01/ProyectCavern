import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-matdashbo',
  templateUrl: './matdashbo.component.html',
  styleUrls: ['./matdashbo.component.css']
})
export class MatdashboComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, color: 'lightgreen' },
          { title: 'Card 2', cols: 1, rows: 1, color: 'lightgreen' },
          { title: 'Card 3', cols: 1, rows: 1, color: 'lightgreen' },
          { title: 'Card 4', cols: 1, rows: 1, color: 'lightgreen' }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, color: 'lightgreen' },
        { title: 'Card 2', cols: 1, rows: 1, color: 'lightgreen' },
        { title: 'Card 3', cols: 1, rows: 2, color: 'lightgreen' },
        { title: 'Card 4', cols: 1, rows: 1, color: 'lightgreen' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
