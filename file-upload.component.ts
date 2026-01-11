import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileIngestionService } from '../../services/file-ingestion.service'; // Assuming standard path

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
  errorMessage: string | null = null;

  constructor(private fileIngestionService: FileIngestionService) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.errorMessage = null; // Clear error on new drag
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  private handleFile(file: File) {
    this.errorMessage = null;
    this.fileIngestionService.parseFile(file)
      .then(data => {
        this.onDataParsed.emit(data);
      })
      .catch(err => {
        console.error("INGESTION ERROR:", err.message);
        this.errorMessage = err.message; // Display error to the user
      });
  }

  // Expose the clear function if needed, though no internal state to clear
  public clear(): void {
    this.errorMessage = null;
    console.log('File upload state cleared.');
  }
}
