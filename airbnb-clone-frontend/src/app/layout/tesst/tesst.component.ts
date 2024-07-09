import { Component, inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-tesst',
  standalone: true,
  imports: [],
  templateUrl: './tesst.component.html',
  styleUrl: './tesst.component.scss'
})
export class TesstComponent {
    // ccc = inject(DynamicDialogRef);
    ccc = inject(DynamicDialogRef, { optional: true });
}
