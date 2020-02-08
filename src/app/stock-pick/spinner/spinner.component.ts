import { Component, Input } from '@angular/core';

/** Available spinner themes. */
export type SpinnerTheme = 'dark' | 'light';

/** Available spinner sizes. */
export type SpinnerSize = 'tiny' | 'small' | 'medium';

export type SpinnerAlign = 'center' | 'top' | 'bottom';

/** Spinner display types */
export type SpinnerDisplay = 'default' | 'overlay';

// -------------------------------------------------------------------------
@Component({
  selector: 'og-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  /** The theme to apply to the spinner */
  @Input() theme: SpinnerTheme;
  /** Defines the custom size that the spinner should have */
  @Input() size: SpinnerSize = 'medium';
  /** Where spinner should be positioned inside its container. */
  @Input() align: SpinnerAlign = 'center';
  /** How to display the spinner */
  @Input() display: SpinnerDisplay = 'default';
}
