import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FreedomComponent } from './freedom/freedom.component';
import { ConversationComponent } from './conversation/conversation.component';
import { TrackingComponent } from './tracking/tracking.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, FreedomComponent, ConversationComponent, TrackingComponent],
  exports:[AboutComponent]
})
export class AboutModule { }
