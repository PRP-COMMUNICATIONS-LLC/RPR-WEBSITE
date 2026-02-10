/**
 * src/types/index.ts
 * Centralized Type Definitions
 * Mission: Authoritative Source of Truth for NodeData
 */

export interface NodeData {
  id: string;
  name: string;
  type: string;
  description: string;
  auditTrail?: {
    timestamp: string;
    user: string;
    action: string;
    details: string;
  }[];
}

export interface LayerProps {
  onNodeClick: (node: NodeData) => void;
}

export type ForensicStatus =
  | 'PENDING'
  | 'EXTRACTED'
  | 'VALIDATED'
  | 'APPROVED'
  | 'USER_REVIEWED'
  | 'FLAGGED';

export interface LedgerEntry {
  id: string;
  transactionId: string;
  yearId: string;
  entityId: string;
  date: string;
  description: string;
  accountCode?: string;
  debit: number | null;
  credit: number | null;
  status: ForensicStatus;
  category: string;
}

export interface UILedgerEntry {
  id: string;
  date: string;
  description: string;
  accountCode?: string;
  debit: number | null;
  credit: number | null;
  status: string;
  flags: string[];
  category: string;
}

export function mapLedgerEntryToUILedgerEntry(entry: LedgerEntry): UILedgerEntry {
  return {
    id: entry.id,
    date: entry.date,
    description: entry.description,
    accountCode: entry.accountCode,
    debit: entry.debit,
    credit: entry.credit,
    status: entry.status,
    flags: [],
    category: entry.category,
  };
}
