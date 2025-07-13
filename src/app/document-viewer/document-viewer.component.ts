import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DocumentViewerComponent 
  ],
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.css'] 
})
export class DocumentViewerComponent {
  @Input() json: { [key: string]: any } = {};
  @Input() searchTerm: string = '';
  @Input() parent: boolean = false;

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }

  highlight(text: any): string {
    if (!this.searchTerm || typeof text !== 'string') return text;
    const regex = new RegExp(this.searchTerm, 'gi');
    return text.replace(regex, match => `<mark>${match}</mark>`);
  }
}
