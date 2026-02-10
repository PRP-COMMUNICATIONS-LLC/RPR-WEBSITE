#!/bin/bash

# TS-Λ3 // SAFE SMALLCAPS LATCH [v2.1.0]
# Mission: Buffered rename for case-insensitive filesystems (macOS).
# Objective: Force lowercase residency without data loss.
# Authority: THE OVERWATCH

ROOT="/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE"

echo "🧪 INITIATING BUFFERED RENAME PROTOCOL..."

# Function to safely rename with buffer to satisfy macOS casing logic
safe_rename() {
    local dir=$1
    local file=$2
    local lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')

    if [ -f "$dir/$file" ]; then
        # If the names are already the same casing, skip
        if [ "$file" == "$lower" ]; then
            return
        fi

        echo "🔡 Processing: $file -> $lower"

        # Step 1: Move to temporary name (breaks the case-link)
        mv "$dir/$file" "$dir/$file.tmp_latch"

        # Step 2: Move from temp to smallcaps
        mv "$dir/$file.tmp_latch" "$dir/$lower"

        echo "✅ Latched: $lower"
    fi
}

# 1. Core Entry Points
safe_rename "$ROOT/src" "App.tsx"
safe_rename "$ROOT/src" "Main.tsx"
safe_rename "$ROOT/src" "i18n.ts"

# 2. Components (The Active Pascal List)
COMP_DIR="$ROOT/src/components"
safe_rename "$COMP_DIR" "Footer.tsx"
safe_rename "$COMP_DIR" "Foundations.tsx"
safe_rename "$COMP_DIR" "Header.tsx"
safe_rename "$COMP_DIR" "Home.tsx"
safe_rename "$COMP_DIR" "Hero.tsx"
safe_rename "$COMP_DIR" "Methods.tsx"
safe_rename "$COMP_DIR" "MothershipSection.tsx"
safe_rename "$COMP_DIR" "MothershipVisualizer.tsx"
safe_rename "$COMP_DIR" "AskOllie.tsx"
safe_rename "$COMP_DIR" "AskOllieLauncher.tsx"
safe_rename "$COMP_DIR" "SectionHeading.tsx"
safe_rename "$COMP_DIR" "SystemCard.tsx"
safe_rename "$COMP_DIR" "Overwatch.tsx"
safe_rename "$COMP_DIR" "Labs.tsx"

# 3. Visualizer Layers
safe_rename "$COMP_DIR" "L0TheFirm.tsx"
safe_rename "$COMP_DIR" "L1OverwatchCommand.tsx"
safe_rename "$COMP_DIR" "L2TheElders.tsx"
safe_rename "$COMP_DIR" "L3TheWorkspace.tsx"
safe_rename "$COMP_DIR" "L4Sovereignty.tsx"
safe_rename "$COMP_DIR" "MermaidViewer.tsx"

# 4. Contexts & Types
safe_rename "$ROOT/src/contexts" "AuthContext.tsx"
safe_rename "$ROOT/src/contexts" "WorkflowContext.tsx"

# 5. Brand (v2.1.0)
safe_rename "$ROOT/src/brand" "RprLogoLockup.tsx"
safe_rename "$ROOT/src/brand" "RprLogoIcon.tsx"
safe_rename "$ROOT/src/brand" "RprMasterLogo.tsx"

# 6. Labs & Background (v2.1.0)
safe_rename "$ROOT/src/pages/labs" "Elders.tsx"
safe_rename "$ROOT/src/background" "HexGrid.tsx"

echo "🏁 PROTOCOL COMPLETE. RUN 'npm run dev' TO VERIFY."
