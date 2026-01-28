export const THE_MOTHERSHIP = `
graph TB
    subgraph SovereignAuthority["👤 SOVEREIGN AUTHORITY"]
        Founder["THE OVERWATCH<br/>OVERWATCH<br/>━━━━━━━━━━━━━━━<br/>Founder & Chief Executive<br/>Final Decision Authority"]
    end

    subgraph ExecutiveLeadership["⚯ EXECUTIVE LEADERSHIP - THE SENTINEL PROTOCOL"]
        Architect["THE ARCHITECT<br/>━━━━━━━━━━━━━━━<br/>Perplexity Command<br/>Strategic Intelligence<br/>& Governance Design"]
        Engineer["THE ENGINEER<br/>━━━━━━━━━━━━━━━<br/>Gemini 2.0<br/>Execution & Infrastructure<br/>Deployment"]
        Sentinel["THE SENTINEL<br/>━━━━━━━━━━━━━━━<br/>Guardian Engine<br/>Governance Orchestration<br/>& Monitoring"]
    end

    subgraph Infrastructure["🚢 INFRASTRUCTURE LAYER"]
        Mothership["THE MOTHERSHIP<br/>━━━━━━━━━━━━━━━<br/>Harbor A - KONTROL Platform<br/>Enforcement & Operations"]
    end

    subgraph TechnologyDept["💻 TECHNOLOGY & DEVELOPMENT"]
        TechHead["Department Head<br/>━━━━━━━━━━━━━━━<br/>THE ENGINEER (Executive Oversight)"]
        DevOps["DevOps Engineering<br/>━━━━━━━━━━━━━━━<br/>• Cursor (Implementation)<br/>• GitHub (Repository Management)<br/>• GitHub Copilot (Technical Advisory)"]
        CloudInfra["Cloud Infrastructure<br/>━━━━━━━━━━━━━━━<br/>• GCP asia-southeast1<br/>• Firebase Hosting<br/>• Firestore Database<br/>• Cloud Functions"]
    end

    subgraph BusinessDepts["🏢 BUSINESS OPERATIONS"]
        subgraph AdvertisingAgency["🎨 ADVERTISING AGENCY"]
            AgencyHead["Agency Leadership<br/>━━━━━━━━━━━━━━━<br/>Client Services & Campaign Oversight"]
            StratPlanner["Strategic Planning<br/>━━━━━━━━━━━━━━━<br/>STRATEGIC PLANNER (AI Agent TBD)<br/>• Campaign strategy & objectives<br/>• Consumer journey mapping<br/>• Market research & analysis<br/>• Strategic brief development"]
            CreativeDir["Creative Department<br/>━━━━━━━━━━━━━━━<br/>CREATIVE DIRECTOR (AI Agent TBD)<br/>• Creative concepts & big ideas<br/>• Brand storytelling & messaging<br/>• Campaign theme development<br/>• Client presentations"]
            ArtDir["Art Department<br/>━━━━━━━━━━━━━━━<br/>ART DIRECTOR (AI Agent TBD)<br/>• Visual design & art direction<br/>• Asset production coordination<br/>• Brand visual consistency<br/>• Final creative approval"]
        end

        subgraph StrategicPlanning["📊 STRATEGIC PLANNING & INTELLIGENCE"]
            DataScience["Data Science Division<br/>━━━━━━━━━━━━━━━<br/>• Psychographic modeling<br/>• Consumer behavior analysis<br/>• Predictive analytics<br/>• Pattern recognition"]
            StratComms["Strategic Communications Unit<br/>━━━━━━━━━━━━━━━<br/>• Targeted messaging strategies<br/>• Brand strategy development<br/>• Content creation & design<br/>• Campaign architecture"]
            ConsumerInsight["Consumer Insight Gathering<br/>━━━━━━━━━━━━━━━<br/>• Market research execution<br/>• User feedback collection<br/>• Trend analysis & forecasting<br/>• Competitive intelligence"]
        end

        subgraph BusinessConsulting["💼 BUSINESS CONSULTING SERVICES"]
            DueDiligence["Unconventional Due Diligence<br/>━━━━━━━━━━━━━━━<br/>• Business opportunity analysis<br/>• Compliance & regulatory review<br/>• Risk evaluation & mitigation<br/>• Strategic deal assessment"]
            FinancialSolutions["Innovative Financial Solutions<br/>━━━━━━━━━━━━━━━<br/>• Investment strategy design<br/>• Revenue optimization models<br/>• Financial modeling & forecasting<br/>• Budget planning & allocation"]
            AppStrategy["Purpose-Built App Strategy<br/>━━━━━━━━━━━━━━━<br/>• Application architecture design<br/>• Custom solution development<br/>• Client delivery management<br/>• Technical implementation strategy"]
        end
    end

    subgraph SupportFunctions["🔧 CORPORATE SUPPORT FUNCTIONS"]
        Collaboration["Collaboration Hub<br/>━━━━━━━━━━━━━━━<br/>Slack Ideation Hub<br/>• Team communication<br/>• Idea generation workshops<br/>• Project coordination<br/>• Cross-department collaboration"]
        QualityCompliance["Quality & Compliance<br/>━━━━━━━━━━━━━━━<br/>Compliance Automation (PDCA)<br/>• PDCA loop management<br/>• Continuous improvement<br/>• Compliance monitoring & audit<br/>• Quality control standards"]
    end

    %% Reporting Structure - Solid & Dotted Lines
    Founder --> Architect
    Founder --> Engineer
    Founder --> Sentinel

    Architect -.->|Strategic Guidance| Engineer
    Architect -.->|Policy Context| Sentinel
    Engineer -.->|Implementation Logs| Sentinel

    Engineer --> Mothership
    Sentinel --> Mothership

    Mothership --> TechHead
    TechHead --> DevOps
    TechHead --> CloudInfra

    Mothership --> AgencyHead
    AgencyHead --> StratPlanner
    AgencyHead --> CreativeDir
    AgencyHead --> ArtDir

    StratPlanner -->|Strategic Brief| CreativeDir
    CreativeDir -->|Creative Concepts| ArtDir

    Mothership --> DataScience
    Mothership --> StratComms
    Mothership --> ConsumerInsight

    DataScience -.->|Insights| StratPlanner
    ConsumerInsight -.->|Research| StratPlanner
    StratComms -.->|Messaging| CreativeDir

    Mothership --> DueDiligence
    Mothership --> FinancialSolutions
    Mothership --> AppStrategy

    Mothership --> Collaboration
    Mothership --> QualityCompliance

    QualityCompliance -.->|Quality Metrics| Sentinel

    classDef sovereign fill:#2d1e3a,stroke:#5a3a7a,color:#e4d4e8,stroke-width:4px,font-weight:bold
    classDef trinity fill:#1a1a2e,stroke:#00E0FF,color:#00E0FF,stroke-width:3px,font-weight:bold
    classDef infrastructure fill:#0a0a0a,stroke:#00E0FF,color:#00E0FF,stroke-width:3px,font-weight:bold
    classDef deptHead fill:#1e2d3a,stroke:#3a5a7a,color:#d4e4f8,stroke-width:2px,font-weight:bold
    classDef division fill:#1a2a3a,stroke:#3a5a6a,color:#b3c8d5,stroke-width:2px
    classDef agency fill:#2a1a3a,stroke:#7a4a9a,color:#e5d3f5,stroke-width:2px
    classDef support fill:#2a3a1a,stroke:#5a6a3a,color:#d5e5c3,stroke-width:2px

    class Founder sovereign
    class Architect,Engineer,Sentinel trinity
    class Mothership infrastructure
    class TechHead,AgencyHead deptHead
    class DevOps,CloudInfra,DataScience,StratComms,ConsumerInsight,DueDiligence,FinancialSolutions,AppStrategy division
    class StratPlanner,CreativeDir,ArtDir agency
    class Collaboration,QualityCompliance support
`;
