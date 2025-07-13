import { Component } from '@angular/core';
import { SAMPLE_JSON } from './document-viewer/json-data';
import { DocumentViewerComponent } from "./document-viewer/document-viewer.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DocumentViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  jsonData = SAMPLE_JSON;
}
