/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: { extend: {
    colors: { cyber: { dark: '#050811' } },
    fontFamily: { sans: ['Inter','sans-serif'], mono: ['JetBrains Mono','monospace'] },
    boxShadow: { 'neon-glow': '0 0 20px rgba(16,185,129,.35)', 'card-cyber': '0 8px 32px rgba(0,0,0,.37)' }
  } },
  plugins: []
}
