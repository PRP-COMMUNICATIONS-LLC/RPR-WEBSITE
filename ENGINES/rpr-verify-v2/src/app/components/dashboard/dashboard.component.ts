import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AgGridModule, FileUploadComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Initial empty state for the Forensic Grid
  rowData: any[] = [];

  // Default Column Definitions for manifest auditing
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'timestamp', headerName: 'Timestamp', flex: 1 },
    { field: 'origin', headerName: 'Data Origin', flex: 1 },
    { field: 'status', headerName: 'Status',
      cellClassRules: {
        'text-red-500 font-bold': params => params.value === 'DISCREPANCY' || params.value === 'ERROR',
        'text-green-500': params => params.value === 'VERIFIED'
      }
    }
  ];

  // Logic: Forensic Telemetry
  get totalRecords(): number { return this.rowData.length; }

  get discrepancyCount(): number {
    return this.rowData.filter(row =>
      row.status === 'DISCREPANCY' || row.status === 'FLAGGED' || row.status === 'ERROR'
    ).length;
  }

  get auditHealth(): number {
    if (this.totalRecords === 0) return 100;
    return Math.round(((this.totalRecords - this.discrepancyCount) / this.totalRecords) * 100);
  }
}
