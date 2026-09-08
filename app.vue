<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --primary-color: #FF2A85;
  --primary-dark: #DB2777;
  --secondary-color: #F472B6;
  --white-bg: #FFFFFF;
  --surface-color: #FFFFFF;
  --brand-gradient: linear-gradient(135deg, #FF2A85 0%, #FF52A2 45%, #D946EF 100%);
  --brand-gradient-hover: linear-gradient(135deg, #E02885 0%, #FF2A85 100%);
  --pink-glow: 0 0 24px rgba(255, 42, 133, 0.25);
}

body, button, input, select, textarea, .v-application {
  font-family: 'Plus Jakarta Sans', 'Noto Sans Lao', 'Noto Sans', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFFFFF !important;
  color: #0F172A !important;
}

/* Modern Gradient Text */
.text-gradient {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Crisp White Glassmorphic Header */
.glass-header {
  background: rgba(255, 255, 255, 0.88) !important;
  backdrop-filter: blur(18px) !important;
  -webkit-backdrop-filter: blur(18px) !important;
  border-bottom: 1px solid rgba(255, 42, 133, 0.2) !important;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03) !important;
}

/* Modern Hover Lift Cards on White Background */
.hover-lift {
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
  border-color: rgba(226, 232, 240, 0.9) !important;
}
.hover-lift:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 16px 32px -6px rgba(255, 42, 133, 0.18) !important;
  border-color: rgba(255, 42, 133, 0.45) !important;
}

/* Image Zoom on Hover */
.img-zoom-wrapper {
  overflow: hidden;
}
.img-zoom-wrapper .v-img__img {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.img-zoom-wrapper:hover .v-img__img {
  transform: scale(1.06) !important;
}

/* BlackPink Button Gradient */
.btn-gradient {
  background: var(--brand-gradient) !important;
  color: white !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 16px rgba(255, 42, 133, 0.3) !important;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
}
.btn-gradient:hover {
  opacity: 0.95 !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 6px 22px rgba(255, 42, 133, 0.45) !important;
}

/* Pink Outlined Button */
.btn-pink-outline {
  border: 1.5px solid #FF2A85 !important;
  color: #FF2A85 !important;
  transition: all 0.2s ease !important;
}
.btn-pink-outline:hover {
  background: rgba(255, 42, 133, 0.08) !important;
  box-shadow: 0 0 14px rgba(255, 42, 133, 0.2) !important;
}

/* Custom Sleek Scrollbars for White Theme */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  background: #FFFFFF;
}
::-webkit-scrollbar-thumb {
  background: #F472B6;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #FF2A85;
}
</style>
