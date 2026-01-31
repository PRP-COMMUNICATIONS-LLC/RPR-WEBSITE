#!/bin/bash
# RPR-WEBSITE STRIKE v1.7.0 | PHASE 0
# AUTHORITY: hello@butterdime.com
# TARGET: rpr-corporate-site (Mothership)

set -e

echo "📡 STEP 1: LOCKING PROJECT CONTEXT..."
firebase use rpr-corporate-site

echo "🏗️ STEP 2: INITIATING PRODUCTION BUILD [SG-CANONICAL-2026]..."
npm run build

echo "🔍 STEP 3: PRE-DEPLOYMENT TARGET VERIFICATION..."
# Ensuring 'main' alias is locked to the physical site ID
firebase target:apply hosting main rpr-corporate-site

echo "🚢 STEP 4: DEPLOYING MOTHERSHIP..."
# Shipping strictly to the 'main' target
firebase deploy --only hosting:main

echo "✅ PHASE 0 COMPLETE."
echo "🔗 APEX: https://rprcomms.com"
echo "🔗 WWW:  https://www.rprcomms.com (Console-Managed Redirect)"
