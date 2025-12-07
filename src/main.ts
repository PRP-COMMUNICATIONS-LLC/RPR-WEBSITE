import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

// Polyfill process.env for browser environments
if (typeof process === 'undefined') {
  (window as any).process = {
    env: {
      // ------------------------------------------------------------------
      // PASTE YOUR GEMINI API KEY BELOW
      // ------------------------------------------------------------------
      API_KEY: 'AIzaSyDrZXkgu3vF82mZwD0IKbYK9IL-asrHWj4' // TODO: Paste your API key here from your local credentials file
      // ------------------------------------------------------------------
    }
  };
}

// Safety check for local development
const key = (window as any).process?.env?.API_KEY;
if (!key) {
  console.warn('⚠️ WARNING: No API Key found in src/main.ts. The AI Chat features will not work until you paste your key.');
} else {
  console.log('✅ API Key loaded.');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
