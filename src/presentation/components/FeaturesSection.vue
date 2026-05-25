<template>
  <section class="features-section" id="beneficios">
    <div class="container text-center">
      <h2 class="section-title">Todo lo que necesitas para analizar tu crédito</h2>
      <p class="section-subtitle">
        Altoque automatiza cálculos financieros complejos y presenta resultados claros para ayudarte a tomar decisiones inteligentes.
      </p>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '⏱️',
    title: 'Simulación en tiempo real',
    desc: 'Cálculo de cuotas y cronogramas instantáneamente con resultados precisos y detallados.'
  },
  {
    icon: '👁️',
    title: 'Transparencia financiera',
    desc: 'Desglose completo de intereses, seguros, y comisiones ocultas en cada cuota del préstamo.'
  },
  {
    icon: '🧮',
    title: 'Método francés',
    desc: 'Generación automática de tablas de amortización bajo estrictos estándares financieros.'
  },
  {
    icon: '🚗',
    title: 'Compra inteligente',
    desc: 'Incluye cálculo de valor residual para estructuras de financiamiento vehicular moderno.'
  },
  {
    icon: '📈',
    title: 'Indicadores avanzados',
    desc: 'Visualiza fácilmente TCEA, VAN y TIR con una experiencia premium y sin complicaciones.'
  },
  {
    icon: '🔄',
    title: 'Comparación de escenarios',
    desc: 'Evalúa múltiples opciones de financiamiento lado a lado para encontrar la mejor alternativa.'
  }
];
</script>

<style scoped>
.features-section {
  padding: 100px 0;
  background-color: var(--bg-color);
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 48px;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: white;
  padding: 32px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(13, 82, 255, 0.2);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: rgba(13, 82, 255, 0.1);
  color: var(--primary-color);
  font-size: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-desc {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
}
</style>
