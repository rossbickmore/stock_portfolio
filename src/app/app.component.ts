import { Component } from '@angular/core';
import { faHandPointer, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  faHandPointer = faHandPointer
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  activePage = "pick"
  title = 'stock-portfolio';

  displayPick() {
    this.activePage = "pick"
    console.log(this.activePage)
  }

  displayTrack() {
    this.activePage = "track"
    console.log(this.activePage)
  }
}