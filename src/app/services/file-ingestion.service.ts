import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileIngestionService {

  constructor() { }

  /**
   * Parses the provided file, automatically detecting the type (JSON or CSV).
   * @param file The file to parse.
   * @returns A promise that resolves with an array of objects representing the data.
   */
  public parseFile(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileExtension === 'json') {
        this.parseJson(file).then(resolve).catch(reject);
      } else if (fileExtension === 'csv') {
        this.parseCsv(file).then(resolve).catch(reject);
      } else {
        reject(new Error('Unsupported file type. Please upload a JSON or CSV file.'));
      }
    });
  }

  /**
   * Parses a JSON file.
   * @param file The JSON file to parse.
   * @returns A promise that resolves with the parsed JSON data.
   */
  private parseJson(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        try {
          const result = JSON.parse(event.target?.result as string);
          resolve(Array.isArray(result) ? result : [result]);
        } catch (error) {
          reject(new Error('Error parsing JSON file: ' + (error as Error).message));
        }
      };
      reader.onerror = () => {
        reject(new Error('Error reading file.'));
      };
      reader.readAsText(file);
    });
  }

  /**
   * Parses a CSV file. The first row is assumed to be the header.
   * @param file The CSV file to parse.
   * @returns A promise that resolves with an array of objects.
   */
  private parseCsv(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        try {
          const text = event.target?.result as string;
          const lines = text.split(/\r\n|\n/);
          const headers = this.parseCsvRow(lines[0]);
          const result: any[] = [];

          for (let i = 1; i < lines.length; i++) {
            const values = this.parseCsvRow(lines[i]);
            if (values.length === headers.length) {
              const obj: any = {};
              for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = values[j];
              }
              result.push(obj);
            }
          }
          resolve(result);
        } catch (error) {
          reject(new Error('Error parsing CSV file: ' + (error as Error).message));
        }
      };
      reader.onerror = () => {
        reject(new Error('Error reading file.'));
      };
      reader.readAsText(file);
    });
  }

  /**
   * Parses a single row of a CSV file, handling quoted fields.
   * @param row The row to parse.
   * @returns An array of strings representing the values in the row.
   */
  private parseCsvRow(row: string): string[] {
    const values: string[] = [];
    let currentVal = '';
    let inQuotes = false;

    for (let i = 0; i < row.length; i++) {
      const char = row[i];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(currentVal.trim());
        currentVal = '';
      } else {
        currentVal += char;
      }
    }
    values.push(currentVal.trim());

    // Clean up quotes from the values
    return values.map(val => val.startsWith('"') && val.endsWith('"') ? val.slice(1, -1) : val);
  }
}
