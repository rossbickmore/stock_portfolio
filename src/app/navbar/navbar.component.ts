import { Component, OnInit } from '@angular/core';
import { faHandPointer, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  faHandPointer = faHandPointer
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  constructor() { }

  ngOnInit() {
  }
}
