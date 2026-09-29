import React from 'react';

/**
 * Retro 7/11 Cafe Official Badge & Typography Logo
 * Recreates the authentic scalloped badge logo and signature typography:
 * - Scalloped circular seal badge with "RETRO 7/11 CAFE", "AUTHENTIC AND PREMIUM", "RICH BREW" ribbon, 3 stars, and electric blue "7C" initials.
 * - Bold text: RETRO (White/Dark) 7/11 (Vibrant Blue #0088e8) CAFE (White/Dark)
 * - Tagline: A PREMIUM COFFEE CAFE
 */
export default function Logo({ 
  variant = 'horizontal', // 'horizontal' | 'stacked' | 'badge-only' | 'text-only'
  darkBackground = true, 
  size = 'medium', // 'small' | 'medium' | 'large'
  showTagline = true,
  className = ''
}) {
  // Scaling factors based on size
  const scaleMap = {
    small: { badge: 42, title: '1.25rem', tagline: '0.55rem', gap: '0.6rem' },
    medium: { badge: 56, title: '1.75rem', tagline: '0.7rem', gap: '0.85rem' },
    large: { badge: 84, title: '2.5rem', tagline: '0.9rem', gap: '1.2rem' }
  };

  const scale = scaleMap[size] || scaleMap.medium;

  const textColor = darkBackground ? '#FFFFFF' : '#1A1A1A';
  const blueColor = '#0088e8'; // Vibrant electric blue from logo image

  // Vector Badge Seal rendering
  const BadgeSeal = ({ sizePx = scale.badge }) => (
    <svg 
      width={sizePx} 
      height={sizePx} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.35))', flexShrink: 0 }}
    >
      <defs>
        {/* Curved Path for Top Text */}
        <path id="topTextArc" d="M 32 100 A 68 68 0 0 1 168 100" />
        {/* Curved Path for Bottom Text */}
        <path id="bottomTextArc" d="M 168 100 A 68 68 0 0 1 32 100" />
      </defs>

      {/* Scalloped outer edge circle simulation */}
      <circle cx="100" cy="100" r="98" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      
      {/* Scallop teeth ring */}
      {Array.from({ length: 28 }).map((_, i) => {
        const angle = (i * 360) / 28;
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 94 * Math.cos(rad);
        const cy = 100 + 94 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r="6" fill="#151515" />;
      })}

      {/* Outer Main Black Ring */}
      <circle cx="100" cy="100" r="90" fill="#181818" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 3" />
      
      {/* Inner White Circle */}
      <circle cx="100" cy="100" r="58" fill="#FFFFFF" stroke="#181818" strokeWidth="3" />
      <circle cx="100" cy="100" r="54" fill="none" stroke={blueColor} strokeWidth="1.5" />

      {/* Top Arc Text: RETRO 7/11 CAFE */}
      <text fill="#FFFFFF" fontSize="13.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">
        <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
          RETRO 7/11 CAFE
        </textPath>
      </text>

      {/* Bottom Arc Text: AUTHENTIC AND PREMIUM */}
      <text fill="#FFFFFF" fontSize="9.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.8">
        <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
          AUTHENTIC AND PREMIUM
        </textPath>
      </text>

      {/* Ribbon / Banner on Left and Right: RICH BREW */}
      <g>
        {/* Banner Wings */}
        <rect x="10" y="90" width="34" height="20" fill="#FFFFFF" stroke="#181818" strokeWidth="2" rx="2" />
        <rect x="156" y="90" width="34" height="20" fill="#FFFFFF" stroke="#181818" strokeWidth="2" rx="2" />
        <text x="27" y="104" fill="#181818" fontSize="8" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">RICH</text>
        <text x="173" y="104" fill="#181818" fontSize="8" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">BREW</text>
      </g>

      {/* Center Stylized Cursive Blue 7C Logo Initials */}
      <g transform="translate(100, 96) scale(0.95)">
        {/* 711 Signature Initials in Vibrant Blue */}
        <path
          d="M-26 -22 C-15 -25 15 -27 24 -24 C14 -12 2 -2 -10 18 C-12 22 -14 26 -16 30 M-14 -12 C-4 -12 12 -12 22 -12"
          fill="none"
          stroke={blueColor}
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* C Loop overlay */}
        <path
          d="M20 -15 C6 -24 -20 -18 -22 0 C-24 18 -4 26 18 20 C24 18 28 14 30 8"
          fill="none"
          stroke={blueColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>

      {/* 3 Stars at Bottom of Inner Ring */}
      <g fill="#FFFFFF" transform="translate(100, 166)">
        <polygon points="0,-4 1.2,-1 4,-1 1.8,0.8 2.6,3.6 0,2 -2.6,3.6 -1.8,0.8 -4,-1 -1.2,-1" transform="translate(-14, 0) scale(0.85)" />
        <polygon points="0,-4 1.2,-1 4,-1 1.8,0.8 2.6,3.6 0,2 -2.6,3.6 -1.8,0.8 -4,-1 -1.2,-1" transform="translate(0, 0) scale(1.1)" />
        <polygon points="0,-4 1.2,-1 4,-1 1.8,0.8 2.6,3.6 0,2 -2.6,3.6 -1.8,0.8 -4,-1 -1.2,-1" transform="translate(14, 0) scale(0.85)" />
      </g>
    </svg>
  );

  if (variant === 'badge-only') {
    return <BadgeSeal sizePx={scale.badge} />;
  }

  return (
    <div
      className={`retro-logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexDirection: variant === 'stacked' ? 'column' : 'row',
        gap: scale.gap,
        textAlign: variant === 'stacked' ? 'center' : 'left'
      }}
    >
      {variant !== 'text-only' && <BadgeSeal sizePx={scale.badge} />}
      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Main Title: RETRO 7/11 CAFE */}
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            fontSize: scale.title,
            fontWeight: '900',
            letterSpacing: '0.04em',
            lineHeight: 1.05,
            color: textColor,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35em'
          }}
        >
          <span>RETRO</span>
          <span style={{ color: blueColor, textShadow: '0 0 12px rgba(0, 136, 232, 0.4)' }}>7/11</span>
          <span>CAFE</span>
        </div>

        {/* Tagline: A PREMIUM COFFEE CAFE */}
        {showTagline && (
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: scale.tagline,
              fontWeight: '700',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: textColor,
              opacity: 0.9,
              marginTop: '0.18em'
            }}
          >
            A PREMIUM COFFEE CAFE
          </span>
        )}
      </div>
    </div>
  );
}
