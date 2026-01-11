import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Output() onDataParsed = new EventEmitter<any[]>();
  isDragging = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer?.files[0];
    if (file && file.type === "application/json") {
      this.parseFile(file);
    } else {
      console.warn("RPR-VERIFY: Blocked non-JSON manifest.");
    }
  }

  private parseFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      try {
        const json = JSON.parse(e.target.result);
        // Normalize data to array for Ag-Grid
        this.onDataParsed.emit(Array.isArray(json) ? json : [json]);
      } catch (err) {
        console.error("INGESTION ERROR: Corrupt Manifest DNA");
      }
    };
    reader.readAsText(file);
  }
}
