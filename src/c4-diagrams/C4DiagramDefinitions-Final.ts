/**
 * TS-Λ3 // C4 ARCHITECTURE DEFINITIONS [v3.4.1]
 * Platform: RPR KONTROL | System: THE MOTHERSHIP
 * Nomenclature: L3: LABS // L4: THE FORGE
 * Status: LATCHED // EXIT 0
 */

export interface C4Diagram {
  id: string;
  title: string;
  description: string;
  definition: string;
}

export const sentinelDiagrams: Record<string, C4Diagram> = {
  l1_overwatch: {
    id: 'l1-overwatch',
    title: 'L1: OVERWATCH COMMAND',
    description: 'Sovereign Governance: Sentinel Protocol & Strategic Intake',
    definition: `flowchart TD
    OW["🛡️ OVERWATCH COMMAND<br/>(Founder Authority + Perplexity Command)"]
    subgraph L2_Network ["THE QUANTUM NETWORK"]
        Brain["⚙️ RPR KONTROL"]
    end
    OW -- "Strategic Intent" --> Brain
    Brain -- "Governed Output" --> OW

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef cmd fill:#e6b319,stroke:#121212,color:#121212,stroke-width:4px;
    class OW cmd;
    linkStyle default stroke:#708090,stroke-width:2px;`
  },
  l2_elders: {
    id: 'l2-quantum-network',
    title: 'L2: THE QUANTUM NETWORK',
    description: 'Shared State: Architect, Engineer, Sentinel (Governing Labs & Forge)',
    definition: `graph TB
    subgraph Matrix ["SHARED_STATE_DECISION_MATRIX"]
        direction LR
        ARCH["🐎 ARCHITECT (Perplexity)"]
        ENG["♟️ ENGINEER (Gemini)"]
        SENT["🏰 SENTINEL"]
    end
    subgraph Tiers ["LABS & THE FORGE"]
        direction TB
        L3["L3: LABS"]
        L4["L4: THE FORGE"]
    end
    Matrix === Tiers

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef triad fill:#e6b319,stroke:#121212,color:#121212,stroke-width:2px;
    class ARCH,ENG,SENT triad;
    style Matrix fill:none,stroke:#708090,stroke-dasharray: 5 5;
    linkStyle default stroke:#708090,stroke-width:2px;`
  },
  l3_forge: {
    id: 'l3-labs-plane',
    title: 'L3: LABS',
    description: 'Planning Department: Strategic Intent & Creative Formulation',
    definition: `flowchart TD
    subgraph Orchestration ["⚒️ ORCHESTRATION"]
        direction TB
        Jules["🤖 JULES"]
        Cursor["⌨️ CURSOR"]
    end
    subgraph LABS ["LABS (Planning)"]
        direction TB
        subgraph Strategic_Creative ["Strategic & Creative"]
            STRAT["♟️ Strategy"]
            CREAT["🎨 Creative"]
            ART["🖼️ Art"]
            DES["📐 Design"]
        end
    end
    Orchestration -- "Orchestrates" --> LABS

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef labsTools fill:#22d3ee,stroke:#121212,color:#121212;
    class STRAT,CREAT,ART,DES labsTools;
    linkStyle default stroke:#708090,stroke-width:2px;`
  },
  l4_instances: {
    id: 'l4-the-forge',
    title: 'L4: THE FORGE',
    description: 'Execution Department: Specialist Agents & Sovereign Instances',
    definition: `flowchart TD
    subgraph THE_FORGE ["THE FORGE (Execution)"]
        direction LR
        subgraph Standalone ["Standalone Clones"]
            MyAudit["📊 MYAUDIT"]
            Lab["🌀 LABYRINTH"]
        end
        subgraph InHouse ["In-House Tools"]
            Verify["🛡️ RPR VERIFY"]
            Build["🛠️ DEV OPS"]
        end
    end

    classDef default font-family:Inter,font-weight:700,color:#121212,fill:#dcd7c9,stroke:#708090,stroke-width:2px;
    classDef active fill:#e6b319,stroke:#121212,color:#121212;
    class MyAudit,Lab,Verify,Build active;
    linkStyle default stroke:#708090,stroke-width:2px;`
  }
};