<template>
  <section class="hero-section" id="inicio">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="badge">
          <span class="badge-dot"></span> Fintech peruana especializada en créditos vehiculares
        </div>
        <h1 class="hero-title">
          Simula tu crédito vehicular <span class="text-primary">al toque</span>
        </h1>
        <p class="hero-description">
          Obtén cronogramas precisos, cálculo TCEA, VAN y TIR en segundos y toma decisiones financieras inteligentes con una experiencia moderna y transparente.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">Comenzar simulación</button>
          <button class="btn btn-outline">Ver demo</button>
        </div>
      </div>
      
      <div class="hero-visual">
        <QuickSimulatorCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import QuickSimulatorCard from './QuickSimulatorCard.vue';
</script>

<style scoped>
.hero-section {
  padding: 80px 0;
  background: radial-gradient(circle at 100% 0%, rgba(13, 82, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(13, 82, 255, 0.03) 0%, transparent 50%);
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  align-items: center;
}

@media (min-width: 992px) {
  .hero-container {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background-color: rgba(13, 82, 255, 0.1);
  color: var(--primary-color);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background-color: var(--primary-color);
  border-radius: 50%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-visual {
  display: flex;
  justify-content: center;
  position: relative;
}

.hero-visual::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(13, 82, 255, 0.1) 0%, transparent 70%);
  z-index: -1;
}
</style>
