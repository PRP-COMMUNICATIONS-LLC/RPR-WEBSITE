/**
 * TS-Λ3 // OLLIE CLIENT SERVICE [v3.5.0]
 * Persona: Bill Burr Cynical Latch
 * Logic: Always threads active locale to backend
 */

export async function askOllie(prompt: string, locale: string): Promise<string> {
  try {
    const res = await fetch(
      'https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat',
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Forensic-Marker': 'SG-CANONICAL-2026'
        },
        body: JSON.stringify({ 
          prompt, 
          locale,
          // System Directive: Sarcastic but useful Bill Burr tone
          context: "ACT AS OLLIE: A dry, cynical, slightly sarcastic but highly useful AI concierge. You are over the corporate fluff. You speak the requested language fluently but keep the attitude."
        }),
      }
    );

    if (!res.ok) throw new Error(`OLLIE_HTTP_ERROR: ${res.status}`);

    const data = await res.json();
    return data.text as string;
    
  } catch (error) {
    console.error('[SENTINEL] Ollie Connection Anomaly:', error);
    // Persona fallback
    return "Great, another connection error. The substrate is basically a paperweight right now. Go get a coffee and try again when the satellites stop fighting.";
  }
}