#!/bin/bash
# RPR-KONTROL | DEPLOYMENT STRIKE (Singapore Canonical)
# Purpose: Harbor B Deployment Strike
# Authority: TS-Λ3 | v1.2.7
# Context: Harbor B (Mothership)

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  INITIATING HARBOR B DEPLOYMENT STRIKE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Environment Configuration (Standardized Naming)
if [ -f "Scripts/configure-secrets.js" ]; then
  echo "[INFO] Injecting environment variables..."
  node Scripts/configure-secrets.js
else
  echo "⚠️  WARNING: Scripts/configure-secrets.js not found. Skipping secret injection."
fi

# 2. Pre-Deployment Verification
if [ -f "Scripts/ci-firebase-preflight.sh" ]; then
  echo "[INFO] Running pre-deployment verification..."
  chmod +x Scripts/ci-firebase-preflight.sh
  ./Scripts/ci-firebase-preflight.sh corporate
else
  echo "⚠️  WARNING: Scripts/ci-firebase-preflight.sh not found. Skipping preflight."
fi

# 3. Production Build
echo "[INFO] Commencing production build..."
npm run build

# 4. Target Mapping (Singapore Lock)
echo "[INFO] Latching hosting targets..."
npx firebase target:apply hosting corporate rpr-corporate-site --project rpr-corporate-site
npx firebase target:apply hosting verify rpr-verify-b --project rpr-corporate-site

# 5. Deployment Strike (Singapore Canonical)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  DEPLOYING TO SINGAPORE (asia-southeast1)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npx firebase deploy \
  --only hosting:corporate,hosting:verify \
  --project rpr-corporate-site

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ DEPLOYMENT COMPLETE: HARBOR B LATCHED"
echo "  Mothership: https://rprcomms.com"
echo "  Verify Node: https://verify.rprcomms.com"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
