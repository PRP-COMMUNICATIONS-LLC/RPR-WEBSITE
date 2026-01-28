import React, { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
} from "reactflow";
import "reactflow/dist/style.css";

/**
 * TS-Λ3 // MOTHERSHIP GRAPH [v1.0.0]
 * React Flow org graph visualization for THE MOTHERSHIP hierarchy
 */
export const MothershipGraph: React.FC = () => {
  const nodes: Node[] = useMemo(() => [
    // Sovereign Authority
    {
      id: "founder",
      type: "default",
      position: { x: 400, y: 0 },
      data: { label: "THE OVERWATCH\nFounder & Chief Executive\nFinal Decision Authority" },
      style: {
        background: "#2d1e3a",
        border: "4px solid #5a3a7a",
        color: "#e4d4e8",
        fontWeight: "bold",
        padding: "16px",
        borderRadius: "8px",
        minWidth: "200px",
        textAlign: "center",
        fontSize: "12px",
        lineHeight: "1.4",
      },
    },
    // Executive Leadership - Trinity
    {
      id: "architect",
      type: "default",
      position: { x: 200, y: 150 },
      data: { label: "THE ARCHITECT\nPerplexity Command\nStrategic Intelligence & Governance Design" },
      style: {
        background: "#1a1a2e",
        border: "3px solid #00E0FF",
        color: "#00E0FF",
        fontWeight: "bold",
        padding: "12px",
        borderRadius: "8px",
        minWidth: "180px",
        textAlign: "center",
        fontSize: "11px",
        lineHeight: "1.4",
      },
    },
    {
      id: "engineer",
      type: "default",
      position: { x: 400, y: 150 },
      data: { label: "THE ENGINEER\nGemini 2.0\nExecution & Infrastructure Deployment" },
      style: {
        background: "#1a1a2e",
        border: "3px solid #00E0FF",
        color: "#00E0FF",
        fontWeight: "bold",
        padding: "12px",
        borderRadius: "8px",
        minWidth: "180px",
        textAlign: "center",
        fontSize: "11px",
        lineHeight: "1.4",
      },
    },
    {
      id: "sentinel",
      type: "default",
      position: { x: 600, y: 150 },
      data: { label: "THE SENTINEL\nGuardian Engine\nGovernance Orchestration & Monitoring" },
      style: {
        background: "#1a1a2e",
        border: "3px solid #00E0FF",
        color: "#00E0FF",
        fontWeight: "bold",
        padding: "12px",
        borderRadius: "8px",
        minWidth: "180px",
        textAlign: "center",
        fontSize: "11px",
        lineHeight: "1.4",
      },
    },
    // Infrastructure Layer
    {
      id: "mothership",
      type: "default",
      position: { x: 400, y: 300 },
      data: { label: "THE MOTHERSHIP\nHarbor A - KONTROL Platform\nEnforcement & Operations" },
      style: {
        background: "#0a0a0a",
        border: "3px solid #00E0FF",
        color: "#00E0FF",
        fontWeight: "bold",
        padding: "12px",
        borderRadius: "8px",
        minWidth: "200px",
        textAlign: "center",
        fontSize: "11px",
        lineHeight: "1.4",
      },
    },
    // Technology Department
    {
      id: "techHead",
      type: "default",
      position: { x: 100, y: 450 },
      data: { label: "Technology Department Head\nTHE ENGINEER (Executive Oversight)" },
      style: {
        background: "#1e2d3a",
        border: "2px solid #3a5a7a",
        color: "#d4e4f8",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "6px",
        minWidth: "160px",
        textAlign: "center",
        fontSize: "10px",
        lineHeight: "1.3",
      },
    },
    {
      id: "devops",
      type: "default",
      position: { x: 0, y: 550 },
      data: { label: "DevOps Engineering\nCursor, GitHub, GitHub Copilot" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "cloudInfra",
      type: "default",
      position: { x: 200, y: 550 },
      data: { label: "Cloud Infrastructure\nGCP asia-southeast1\nFirebase Hosting & Firestore" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    // Business Operations - Agency
    {
      id: "agencyHead",
      type: "default",
      position: { x: 400, y: 450 },
      data: { label: "Agency Leadership\nClient Services & Campaign Oversight" },
      style: {
        background: "#1e2d3a",
        border: "2px solid #3a5a7a",
        color: "#d4e4f8",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "6px",
        minWidth: "160px",
        textAlign: "center",
        fontSize: "10px",
        lineHeight: "1.3",
      },
    },
    {
      id: "stratPlanner",
      type: "default",
      position: { x: 300, y: 550 },
      data: { label: "Strategic Planning\nSTRATEGIC PLANNER (AI Agent)" },
      style: {
        background: "#2a1a3a",
        border: "2px solid #7a4a9a",
        color: "#e5d3f5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "creativeDir",
      type: "default",
      position: { x: 450, y: 550 },
      data: { label: "Creative Department\nCREATIVE DIRECTOR (AI Agent)" },
      style: {
        background: "#2a1a3a",
        border: "2px solid #7a4a9a",
        color: "#e5d3f5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "artDir",
      type: "default",
      position: { x: 600, y: 550 },
      data: { label: "Art Department\nART DIRECTOR (AI Agent)" },
      style: {
        background: "#2a1a3a",
        border: "2px solid #7a4a9a",
        color: "#e5d3f5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    // Strategic Planning & Intelligence
    {
      id: "dataScience",
      type: "default",
      position: { x: 700, y: 450 },
      data: { label: "Data Science Division\nPsychographic Modeling & Analytics" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "stratComms",
      type: "default",
      position: { x: 850, y: 450 },
      data: { label: "Strategic Communications\nBrand Strategy & Messaging" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "consumerInsight",
      type: "default",
      position: { x: 1000, y: 450 },
      data: { label: "Consumer Insight Gathering\nMarket Research & Intelligence" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    // Business Consulting
    {
      id: "dueDiligence",
      type: "default",
      position: { x: 700, y: 550 },
      data: { label: "Unconventional Due Diligence\nBusiness Opportunity Analysis" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "financialSolutions",
      type: "default",
      position: { x: 850, y: 550 },
      data: { label: "Innovative Financial Solutions\nInvestment Strategy & Modeling" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "appStrategy",
      type: "default",
      position: { x: 1000, y: 550 },
      data: { label: "Purpose-Built App Strategy\nCustom Solution Development" },
      style: {
        background: "#1a2a3a",
        border: "2px solid #3a5a6a",
        color: "#b3c8d5",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    // Support Functions
    {
      id: "collaboration",
      type: "default",
      position: { x: 400, y: 650 },
      data: { label: "Collaboration Hub\nSlack Ideation Hub" },
      style: {
        background: "#2a3a1a",
        border: "2px solid #5a6a3a",
        color: "#d5e5c3",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
    {
      id: "qualityCompliance",
      type: "default",
      position: { x: 600, y: 650 },
      data: { label: "Quality & Compliance\nCompliance Automation (PDCA)" },
      style: {
        background: "#2a3a1a",
        border: "2px solid #5a6a3a",
        color: "#d5e5c3",
        padding: "8px",
        borderRadius: "6px",
        minWidth: "140px",
        textAlign: "center",
        fontSize: "9px",
        lineHeight: "1.3",
      },
    },
  ], []);

  const edges: Edge[] = useMemo(() => [
    // Founder to Trinity
    { id: "e1", source: "founder", target: "architect", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e2", source: "founder", target: "engineer", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e3", source: "founder", target: "sentinel", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    // Trinity to Mothership
    { id: "e4", source: "engineer", target: "mothership", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e5", source: "sentinel", target: "mothership", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    // Strategic guidance (dotted)
    { id: "e6", source: "architect", target: "engineer", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
    { id: "e7", source: "architect", target: "sentinel", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
    { id: "e8", source: "engineer", target: "sentinel", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
    // Mothership to Departments
    { id: "e9", source: "mothership", target: "techHead", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e10", source: "mothership", target: "agencyHead", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e11", source: "mothership", target: "dataScience", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e12", source: "mothership", target: "stratComms", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e13", source: "mothership", target: "consumerInsight", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e14", source: "mothership", target: "dueDiligence", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e15", source: "mothership", target: "financialSolutions", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e16", source: "mothership", target: "appStrategy", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e17", source: "mothership", target: "collaboration", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    { id: "e18", source: "mothership", target: "qualityCompliance", style: { stroke: "#00E0FF", strokeWidth: 2 } },
    // Tech Department hierarchy
    { id: "e19", source: "techHead", target: "devops", style: { stroke: "#3a5a7a", strokeWidth: 1.5 } },
    { id: "e20", source: "techHead", target: "cloudInfra", style: { stroke: "#3a5a7a", strokeWidth: 1.5 } },
    // Agency hierarchy
    { id: "e21", source: "agencyHead", target: "stratPlanner", style: { stroke: "#7a4a9a", strokeWidth: 1.5 } },
    { id: "e22", source: "agencyHead", target: "creativeDir", style: { stroke: "#7a4a9a", strokeWidth: 1.5 } },
    { id: "e23", source: "agencyHead", target: "artDir", style: { stroke: "#7a4a9a", strokeWidth: 1.5 } },
    { id: "e24", source: "stratPlanner", target: "creativeDir", style: { stroke: "#7a4a9a", strokeWidth: 1.5 } },
    { id: "e25", source: "creativeDir", target: "artDir", style: { stroke: "#7a4a9a", strokeWidth: 1.5 } },
    // Cross-functional (dotted)
    { id: "e26", source: "dataScience", target: "stratPlanner", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
    { id: "e27", source: "consumerInsight", target: "stratPlanner", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
    { id: "e28", source: "stratComms", target: "creativeDir", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
    { id: "e29", source: "qualityCompliance", target: "sentinel", style: { stroke: "#64748B", strokeWidth: 1, strokeDasharray: "5,5" } },
  ], []);

  return (
    <div className="w-full h-[480px] md:h-[640px] rounded-lg border border-white/10 bg-[#0A0A0A]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        zoomOnScroll
        panOnScroll
        minZoom={0.2}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background color="#1A1A1A" gap={16} />
        <Controls />
        <MiniMap 
          style={{ 
            backgroundColor: "#050505",
            border: "1px solid #00E0FF",
          }}
          nodeColor="#00E0FF"
          maskColor="rgba(0, 0, 0, 0.6)"
        />
      </ReactFlow>
    </div>
  );
};