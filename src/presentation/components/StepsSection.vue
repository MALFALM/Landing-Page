<template>
  <section class="steps-section">
    <div class="container text-center">
      <h2 class="section-title">Simula tu crédito en 3 simples pasos</h2>
      
      <div class="steps-container">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Ingresa los datos',
    desc: 'Configura el precio del vehículo y las condiciones básicas de tu crédito.'
  },
  {
    title: 'Ajusta tu crédito',
    desc: 'Selecciona la moneda, periodo de gracia y método de pago ideal.'
  },
  {
    title: 'Analiza el cronograma',
    desc: 'Obtén un desglose financiero detallado y tu cronograma de pagos.'
  }
];
</script>

<style scoped>
.steps-section {
  padding: 80px 0;
  background-color: #f1f5f9; /* Slightly darker grey for contrast */
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  position: relative;
}

@media (min-width: 768px) {
  .steps-container {
    flex-direction: row;
    justify-content: space-between;
  }
  
  /* Connector line */
  .steps-container::before {
    content: '';
    position: absolute;
    top: 32px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-color: var(--border-color);
    z-index: 1;
  }
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.step-number {
  width: 64px;
  height: 64px;
  background-color: white;
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  margin-bottom: 24px;
  border: 2px solid white;
  transition: all 0.3s ease;
}

.step:hover .step-number {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.step-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.step-desc {
  color: var(--text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  max-width: 250px;
}
</style>
