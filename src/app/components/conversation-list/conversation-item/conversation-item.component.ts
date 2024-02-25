import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Conversation } from '../conversation-list.component';

@Component({
  selector: 'wp-conversation-item',
  standalone: true,
  imports: [],
  templateUrl: './conversation-item.component.html',
  styleUrl: './conversation-item.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None

})
export class ConversationItemComponent {
  @Input() conversation!: Conversation;
}
