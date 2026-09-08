<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --primary-color: #4F46E5;
  --primary-dark: #3730A3;
  --secondary-color: #0EA5E9;
  --brand-gradient: linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%);
  --brand-gradient-hover: linear-gradient(135deg, #4338CA 0%, #0891B2 100%);
}

body, button, input, select, textarea, .v-application {
  font-family: 'Plus Jakarta Sans', 'Noto Sans Lao', 'Noto Sans', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Modern Gradient Text */
.text-gradient {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glassmorphism Header */
.glass-header {
  background: rgba(255, 255, 255, 0.86) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(226, 232, 240, 0.8) !important;
}

/* Modern Hover Lift Cards */
.hover-lift {
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.hover-lift:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 16px 32px -8px rgba(79, 70, 229, 0.14) !important;
  border-color: rgba(99, 102, 241, 0.35) !important;
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

/* Brand Button Gradient */
.btn-gradient {
  background: var(--brand-gradient) !important;
  color: white !important;
  transition: opacity 0.2s ease, transform 0.2s ease !important;
}
.btn-gradient:hover {
  opacity: 0.95 !important;
  transform: translateY(-1px) !important;
}

/* Custom Sleek Scrollbars */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #F8FAFC;
}
::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}
</style>
