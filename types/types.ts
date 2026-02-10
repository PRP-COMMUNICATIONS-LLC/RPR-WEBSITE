/**
 * TS-Λ3 // AUTHORITATIVE TYPES [v4.3.0]
 * Path: src/types/types.ts
 * Mission: Resolve TS2305/TS2307 & Consolidate Architectural Interfaces
 * Authority: THE OVERWATCH
 */

export interface AuditTrail {
    timestamp: string;
    user: string;
    action: string;
    details: string;
}

/**
 * Primary interface for architectural nodes within the Mothership Visualizer.
 * Used across L1-L4 layers.
 */
export interface NodeData {
    id: string;
    name: string;
    type: string;
    description: string;
    auditTrail?: AuditTrail[];
}

/**
 * Ledger & Forensic system interfaces
 */
export interface LedgerEntry {
    id: string;
    date: string;
    description: string;
    amount: number;
    category: string;
    status: 'verified' | 'pending' | 'flagged';
}

export interface UILedgerEntry extends LedgerEntry {
    isHighlighted?: boolean;
}

/**
 * Transformation logic for UI-specific ledger states
 */
export const mapLedgerEntryToUILedgerEntry = (entry: LedgerEntry): UILedgerEntry => ({
    ...entry,
    isHighlighted: entry.status === 'flagged'
});