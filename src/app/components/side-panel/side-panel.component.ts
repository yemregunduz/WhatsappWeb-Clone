import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ConversationListComponent } from '../conversation-list/conversation-list.component';

@Component({
  selector: 'wp-side-panel',
  standalone: true,
  imports: [HeaderComponent,ConversationListComponent],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePanelComponent {

}
