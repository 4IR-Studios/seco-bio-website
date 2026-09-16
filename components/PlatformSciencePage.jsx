import React from 'react';
import { CountUp, PageTopBand } from './ui';

const BLUE = '#3B60E4';
const GREEN = '#1E8E5A';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

// Dark, bold section backgrounds — 85-90% opacity of the site's darker brand colors,
// used to break up the all-white page with alternating color blocks.
const DARK_GREEN_BG = 'rgba(13, 68, 41, 0.88)';   // matches the footer's dark green gradient stop
const DARK_INK_BG = 'rgba(46, 66, 89, 0.9)';      // matches INK, deepened for a bold block
const LIGHT_GREEN_ACCENT = '#7FE3A8';             // eyebrow/accent tint legible on DARK_GREEN_BG
const LIGHT_BLUE_ACCENT = '#8FADFF';              // eyebrow/accent tint legible on DARK_INK_BG

// Light tints used for the in-page comparison/stat cards
const BLUE_BG_LIGHT = '#EEF1FD';
const GREEN_BG_LIGHT = '#EAF7EF';
const GRAY_BG_LIGHT = '#F3F4F6';
const PINK = '#D1226B';
const PINK_BG = '#FDECF2';

export default function PlatformSciencePage({ onNavigate }) {
  return (
    <div>
      <PageTopBand image="/images/lab-blue.jpg" />

      {/* 1. THE TECHNOLOGY — moved to the top of the page per Joe's request;
          content unchanged, just reordered ahead of the platform stats. */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '2.5rem', lineHeight: 1.2 }}>Seco's technology provides a protective coat of safe ingredients <span style={{ color: BLUE, fontStyle: 'italic' }}>wrapped around every living cell.</span></h2>

          {/* Joe's own deck image — LIVE CELL / SAFE COATING callouts are baked
              into the photo itself (with pointer lines to exact spots on the
              cell), so it replaces the separate code-drawn boxes we used to
              overlay on a plain stock photo. Shown at its native ~1.95:1
              ratio, full width, so nothing near the edges gets cropped. */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', aspectRatio: '1906 / 978' }}>
            <img
              src="/images/science/bacteria-coating-deck.jpg"
              alt="Live probiotic cell with protective safe coating, annotated"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div style={{ maxWidth: 480, margin: '0 auto 2rem' }}>
            <div style={{ backgroundColor: BLUE_BG_LIGHT, borderRadius: '12px', borderTop: `4px solid ${BLUE}`, padding: '2rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: BLUE, marginBottom: '1.5rem' }}>How It Works</h4>
              <div style={{ backgroundColor: 'rgba(59,96,228,0.15)', border: `1px solid ${BLUE}`, borderRadius: '999px', padding: '14px 10px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', color: BLUE, marginBottom: '8px' }}>SAFE COATING</div>
                <div style={{ backgroundColor: BLUE, color: 'white', borderRadius: '999px', padding: '10px 20px', fontSize: '13px', fontWeight: 700, display: 'inline-block' }}>LIVE CELL</div>
              </div>
              <p style={{ fontSize: '13px', color: MUTED, fontStyle: 'italic', textAlign: 'center', margin: '1rem 0 1.5rem' }}>Shields the cell through milling, drying, shelf life & digestion</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'No genetic modification', desc: 'The strain is never altered' },
                  { title: 'GRAS / FDA-approved only', desc: 'Already-approved compounds — no new approvals' },
                  { title: 'Keeps cells alive', desc: 'Viable to point of consumption' }
                ].map(({ title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: GREEN, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>✓</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: SLATE }}>{title}</div>
                      <div style={{ fontSize: '13px', color: MUTED }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'stretch', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', backgroundColor: PINK_BG, borderRadius: '10px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: PINK, marginBottom: '0.75rem' }}>Today's Industry Fix: Overfill</h4>
              <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>Brands load <strong>200%–36,000%+ above label</strong> to survive die-off — yet viability stays unpredictable and can <strong>miss the claim by end of shelf life.</strong></p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '28px', color: MUTED }}>→</div>
            <div style={{ flex: '1 1 300px', backgroundColor: GREEN_BG_LIGHT, borderRadius: '10px', padding: '1.5rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: GREEN, marginBottom: '0.75rem' }}>The Seco Coating</h4>
              <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>The cell stays alive on its own, so brands <strong>slash overfill, cut COGS (cost of goods sold),</strong> and <strong>meet the label claim at consumption.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PLATFORM */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>This is published science, not a marketing pitch.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}><CountUp end={10000} suffix="×" /></div>
                <div style={{ fontSize: '14px', color: MUTED }}>more surviving cells than an uncoated commercial strain</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}><CountUp end={6.5} decimals={1} suffix=" months" /></div>
                <div style={{ fontSize: '14px', color: MUTED }}>sustained viability at body temperature. Demonstrated under sustained high-temperature conditions (37°C).</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}><CountUp end={2080} /></div>
                <div style={{ fontSize: '14px', color: MUTED }}>formulations tested to find what works</div>
              </div>
            </div>
          </div>

          {/* Overage callout — the commercial takeaway from the viability-retention
              result, worded to hedge correctly: "may reduce," not a claim that
              overage has already been demonstrated as reduced. */}
          <div style={{ backgroundColor: BLUE_BG_LIGHT, borderRadius: '12px', borderLeft: `4px solid ${BLUE}`, padding: '1.5rem', marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: BLUE, marginBottom: '0.5rem' }}>Potential to reduce formulation overage</h4>
            <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7 }}>Greater viability retention may reduce the initial CFU overage required to meet target viability specifications over shelf life.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="https://www.nature.com/articles/s41563-024-01937-6" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: BLUE, color: 'white', padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              Read the research in Nature Materials →
            </a>
            <a href="/papers/Nature-Materials-Seco.pdf" download style={{ display: 'inline-block', backgroundColor: 'white', color: BLUE, border: `2px solid ${BLUE}`, padding: '10px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              Download the paper (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2, textAlign: 'center' }}>Today's probiotic <span style={{ color: GREEN, fontStyle: 'italic' }}>consumer products represent</span> a tiny fraction of what actually lives in a healthy gut.</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic', textAlign: 'center', maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}>The bacteria linked to long-term gut health go far beyond the handful of strains that survive today's manufacturing process.</p>

          {/* Bubble comparison — sized proportionally, not just stated as numbers.
              Direction is a deterministic column-on-mobile/row-on-desktop
              switch (not flex-wrap auto-detection) so the arrow's orientation
              always matches the actual flow instead of staying horizontal
              even when the circles have stacked vertically. */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8" style={{ padding: '1rem 0 2.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 'clamp(56px, 18vw, 76px)', height: 'clamp(56px, 18vw, 76px)', borderRadius: '50%', backgroundColor: GRAY_BG_LIGHT, border: `2px solid ${MUTED}`, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', fontWeight: 700, color: MUTED }}>~10–20</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: MUTED }}>Strains on the<br />shelf today</div>
            </div>
            <div style={{ fontSize: '24px', color: MUTED }}>
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 'clamp(150px, 55vw, 240px)', height: 'clamp(150px, 55vw, 240px)', borderRadius: '50%', backgroundColor: GREEN_BG_LIGHT, border: `3px solid ${GREEN}`, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 'clamp(30px, 9vw, 42px)', fontWeight: 700, color: SLATE }}><CountUp end={1000} prefix="~" /></span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: GREEN }}>Species inside a<br />healthy gut</div>
            </div>
          </div>

          {/* The punchline — the actual point of the section, sized to match */}
          <div style={{ backgroundColor: INK, color: 'white', borderRadius: '16px', padding: '2.5rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(40px, 7vw, 56px)', fontWeight: 800, color: LIGHT_GREEN_ACCENT, lineHeight: 1 }}>
              <CountUp end={50} prefix="~" suffix="×" />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0.5rem 0 1.25rem' }}>Gap at the species level alone</div>
            <p style={{ fontSize: 'clamp(19px, 2.6vw, 26px)', fontWeight: 700, lineHeight: 1.35, maxWidth: '24ch', margin: '0 auto' }}>
              Seco's technology unlocks the delivery of bacterial species not available to consumers today.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LIVING PRODUCTS DIE ON THE WAY TO YOU */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>Most of them don't.</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2.5rem' }}>Probiotics are alive. That's the entire point of them — and it's also the problem. Bacteria have to survive being dried, pressed into tablets, sealed in bottles, shipped through heat, and stored for months before anyone opens the package.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Matched the label', value: '7 of 13', caption: 'probiotic products tested contained the number of living cells printed on the label' },
              { label: 'Alive on arrival', value: '1 in 50', caption: 'cells in the average product was still alive when the consumer opened it' },
              { label: 'Overfilled to compensate', value: '360×', caption: 'more bacteria loaded at the factory than the label promises, to compensate for the die-off' }
            ].map(({ label, value, caption }) => (
              <div key={label} style={{ backgroundColor: 'white', borderRadius: '12px', borderTop: `4px solid ${BLUE}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: BLUE, marginBottom: '0.75rem' }}>{label}</div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>{value}</div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{caption}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: MUTED, fontStyle: 'italic' }}>
            Source: Jimenez, M., L'Heureux, J., Kolaya, E. et al. "Synthetic extremophiles via species-specific formulations improve microbial therapeutics." <em>Nature Materials</em> (2024).{' '}
            <a href="https://doi.org/10.1038/s41563-024-01937-6" target="_blank" rel="noopener noreferrer" style={{ color: BLUE, textDecoration: 'underline' }}>
              https://doi.org/10.1038/s41563-024-01937-6
            </a>
          </p>
        </div>
      </section>

      {/* 5. PLATFORM & SCIENCE — Predict / Prove / Scale */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: DARK_INK_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>Seco's platform predicts the winning formula <span style={{ color: LIGHT_BLUE_ACCENT, fontStyle: 'italic' }}>before</span> a single cell enters the lab.</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2rem' }}>AI-native formulation. Autonomous wet-lab. Every strain we solve trains the platform — and the platform gets faster with every loop.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { num: '01', label: 'Predict', title: 'AI-native formulation', body: 'AI models forecast the optimal protective ingredients — sugars, proteins, lipids — for any live bioproduct, before a single wet-lab experiment is run.' },
              { num: '02', label: 'Prove', title: 'Autonomous wet-lab', body: 'Closed-loop robotics run hundreds of formulation trials in parallel — validating shelf-stability in days, not years.' },
              { num: '03', label: 'Scale', title: 'Kilogram-scale PoC in months', body: 'Every candidate moves from concept to kilogram-scale commercial proof-of-concept in months, then licensed per strain.' }
            ].map(({ num, label, title, body }) => (
              <div key={num} style={{ backgroundColor: 'white', borderRadius: '12px', borderTop: `4px solid ${BLUE}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: BLUE, marginBottom: '0.25rem' }}>{num}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: BLUE, marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontStyle: 'italic' }}>Formulations are built exclusively from ingredients already broadly accepted for food and dietary-supplement use across major global frameworks — including the US (FDA GRAS), the EU (EFSA), Canada, Japan, and equivalent regimes. Partners retain product-level regulatory ownership in their markets.</p>
        </div>
      </section>

      {/* WHERE DO YOU FIT IN */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1.5rem 5rem' }}>
        <div className="max-w-4xl mx-auto text-center" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, lineHeight: 1.2 }}>Where do you fit in?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: '2px solid rgba(59,96,228,0.2)', borderTop: `3px solid ${BLUE}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: BLUE, marginBottom: '0.75rem' }}>Business Partners</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>Brands, manufacturers, and ingredient partners bringing us a strain to protect — licensed back to you once it's solved.</p>
          </div>
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: '2px solid rgba(30,142,90,0.2)', borderTop: `3px solid ${GREEN}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: GREEN, marginBottom: '0.75rem' }}>Capital Partners</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>Scale the platform with us.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
