/**
 * Inline SVG sports-car graphic.
 * Pure SVG — no external images needed.
 */
export default function CarGraphic() {
  return (
    <svg
      viewBox="0 0 900 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_20px_60px_rgba(200,169,110,0.15)]"
      aria-label="Sports car illustration"
    >
      {/* ── Shadow beneath car ── */}
      <ellipse cx="450" cy="290" rx="360" ry="18" fill="rgba(0,0,0,0.35)" />

      {/* ── Car body ── */}
      <path
        d="M120 220 C120 220 160 140 260 120 C320 110 380 105 450 105
           C520 105 580 110 640 120 C740 140 780 220 780 220 Z"
        fill="#1a1a1a"
        stroke="#c8a96e"
        strokeWidth="1.5"
      />

      {/* ── Roof / Cabin ── */}
      <path
        d="M290 120 C290 120 310 65 370 55 C400 50 450 48 500 50
           C550 52 590 60 610 70 C630 80 640 120 640 120 Z"
        fill="#111111"
        stroke="#c8a96e"
        strokeWidth="1"
        opacity="0.9"
      />

      {/* ── Windshield ── */}
      <path
        d="M300 118 L345 62 C360 52 400 50 450 49 C480 49 510 52 530 58 L555 65 L610 118 Z"
        fill="#0d2137"
        opacity="0.7"
        stroke="#c8a96e"
        strokeWidth="0.5"
      />

      {/* ── Windshield reflection ── */}
      <path
        d="M340 70 L370 58 C400 52 440 50 460 50 L420 115 L310 115 Z"
        fill="rgba(200,169,110,0.06)"
      />

      {/* ── Hood line ── */}
      <line x1="160" y1="190" x2="290" y2="120" stroke="#c8a96e" strokeWidth="0.5" opacity="0.3" />
      <line x1="740" y1="190" x2="610" y2="120" stroke="#c8a96e" strokeWidth="0.5" opacity="0.3" />

      {/* ── Front bumper ── */}
      <path
        d="M100 230 C100 222 108 215 120 220 L250 220
           C250 220 240 230 230 240 L110 240 C104 240 100 236 100 230 Z"
        fill="#111"
        stroke="#c8a96e"
        strokeWidth="0.8"
      />

      {/* ── Rear bumper ── */}
      <path
        d="M800 230 C800 222 792 215 780 220 L650 220
           C650 220 660 230 670 240 L790 240 C796 240 800 236 800 230 Z"
        fill="#111"
        stroke="#c8a96e"
        strokeWidth="0.8"
      />

      {/* ── Front headlight ── */}
      <ellipse cx="138" cy="208" rx="22" ry="8" fill="#c8a96e" opacity="0.8" />
      <ellipse cx="138" cy="208" rx="14" ry="5" fill="#fff" opacity="0.5" />

      {/* ── Rear taillight ── */}
      <ellipse cx="762" cy="208" rx="20" ry="8" fill="#e74c3c" opacity="0.7" />
      <ellipse cx="762" cy="208" rx="12" ry="5" fill="#ff6b6b" opacity="0.4" />

      {/* ── Side body line ── */}
      <path
        d="M140 220 Q300 205 450 200 Q600 205 760 220"
        fill="none"
        stroke="#c8a96e"
        strokeWidth="0.6"
        opacity="0.3"
      />

      {/* ── Lower body accent ── */}
      <path
        d="M120 225 Q300 250 450 255 Q600 250 780 225 L780 240 Q600 265 450 270 Q300 265 120 240 Z"
        fill="#0f0f0f"
        stroke="#c8a96e"
        strokeWidth="0.4"
        opacity="0.5"
      />

      {/* ── Front wheel ── */}
      <g>
        <circle cx="240" cy="255" r="40" fill="#1a1a1a" stroke="#333" strokeWidth="3" />
        <circle cx="240" cy="255" r="32" fill="#111" stroke="#444" strokeWidth="1.5" />
        <circle cx="240" cy="255" r="22" fill="#1a1a1a" stroke="#555" strokeWidth="1" />
        <circle cx="240" cy="255" r="8" fill="#c8a96e" opacity="0.6" />
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="240"
            y1="255"
            x2={240 + 28 * Math.cos((angle * Math.PI) / 180)}
            y2={255 + 28 * Math.sin((angle * Math.PI) / 180)}
            stroke="#c8a96e"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
      </g>

      {/* ── Rear wheel ── */}
      <g>
        <circle cx="660" cy="255" r="40" fill="#1a1a1a" stroke="#333" strokeWidth="3" />
        <circle cx="660" cy="255" r="32" fill="#111" stroke="#444" strokeWidth="1.5" />
        <circle cx="660" cy="255" r="22" fill="#1a1a1a" stroke="#555" strokeWidth="1" />
        <circle cx="660" cy="255" r="8" fill="#c8a96e" opacity="0.6" />
        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="660"
            y1="255"
            x2={660 + 28 * Math.cos((angle * Math.PI) / 180)}
            y2={255 + 28 * Math.sin((angle * Math.PI) / 180)}
            stroke="#c8a96e"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
      </g>

      {/* ── Side mirror left ── */}
      <path
        d="M285 105 L275 95 L268 100 L278 110 Z"
        fill="#1a1a1a"
        stroke="#c8a96e"
        strokeWidth="0.5"
      />

      {/* ── Side mirror right ── */}
      <path
        d="M615 105 L625 95 L632 100 L622 110 Z"
        fill="#1a1a1a"
        stroke="#c8a96e"
        strokeWidth="0.5"
      />

      {/* ── Door line ── */}
      <line x1="430" y1="118" x2="430" y2="220" stroke="#c8a96e" strokeWidth="0.3" opacity="0.25" />

      {/* ── Door handle ── */}
      <rect x="440" y="160" width="20" height="3" rx="1.5" fill="#c8a96e" opacity="0.3" />

      {/* ── Ground reflection ── */}
      <path
        d="M160 275 Q300 285 450 288 Q600 285 740 275 L740 295 Q600 305 450 308 Q300 305 160 295 Z"
        fill="url(#groundGrad)"
        opacity="0.15"
      />

      <defs>
        <linearGradient id="groundGrad" x1="450" y1="275" x2="450" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c8a96e" stopOpacity="0.3" />
          <stop offset="1" stopColor="#c8a96e" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
