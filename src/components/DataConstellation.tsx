export function DataConstellation() {
  return (
    <div className="constellation-frame">
      <div className="constellation-frame__topline" aria-hidden="true">
        <span>IDEAS IN MOTION</span>
        <span className="frame-mark">IB / 01</span>
      </div>
      <svg
        className="data-constellation"
        viewBox="0 0 560 500"
        role="img"
        aria-labelledby="constellation-title constellation-description"
      >
        <title id="constellation-title">A constellation of connected ideas</title>
        <desc id="constellation-description">
          Fine grid lines, connecting paths, and distinct data points form an
          abstract network, representing the meeting of analysis and creativity.
        </desc>
        <defs>
          <pattern id="constellation-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" className="grid-line" fill="none" />
          </pattern>
        </defs>
        <rect x="26" y="22" width="508" height="456" fill="url(#constellation-grid)" />
        <path className="network-line network-line--quiet" d="M75 354 160 285 229 326 297 218 374 246 464 135" />
        <path className="network-line" d="M94 133 160 285 271 112 297 218 421 352 464 135" />
        <path className="network-line network-line--quiet" d="M94 133 271 112 374 246 421 352 297 218 160 285 75 354" />
        <path className="network-line network-line--accent" d="M160 285 271 112 374 246 421 352" />
        <path className="network-orbit" d="M91 376c64 47 199 43 296-18 83-52 112-139 65-203" />
        <g className="network-node network-node--small">
          <circle cx="75" cy="354" r="4" />
          <circle cx="94" cy="133" r="4" />
          <circle cx="229" cy="326" r="4" />
          <circle cx="464" cy="135" r="4" />
        </g>
        <g className="network-node network-node--accent">
          <circle cx="160" cy="285" r="7" />
          <circle cx="271" cy="112" r="8" />
          <circle cx="374" cy="246" r="6" />
          <circle cx="421" cy="352" r="8" />
        </g>
        <g className="network-node network-node--core">
          <circle cx="297" cy="218" r="13" />
          <circle cx="297" cy="218" r="3" />
        </g>
        <g className="constellation-labels" aria-hidden="true">
          <text x="51" y="113">OBSERVE</text>
          <text x="246" y="80">INTERPRET</text>
          <text x="394" y="388">CREATE</text>
          <text x="318" y="202">IDEA</text>
          <text x="81" y="398">01 — 03</text>
        </g>
        <path className="frame-corner" d="M26 56V22h34M500 22h34v34M534 444v34h-34M60 478H26v-34" />
      </svg>
      <div className="constellation-frame__caption">
        <span>ANALYZE <i /> MAKE <i /> REFINE</span>
        <span className="caption-spark" aria-hidden="true">✳</span>
      </div>
    </div>
  )
}