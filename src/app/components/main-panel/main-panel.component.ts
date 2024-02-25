import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'wp-main-panel',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPanelComponent {

}
