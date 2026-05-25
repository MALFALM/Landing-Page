<template>
  <div class="simulator-card">
    <div class="card-header">
      <h3 class="card-title">Simulador financiero</h3>
      <div class="icon-btn">⚙️</div>
    </div>
    
    <div class="card-body">
      <div class="input-group">
        <label>Monto del vehículo</label>
        <div class="input-wrapper">
          <span class="currency-prefix">S/</span>
          <input type="number" v-model="loanAmount" class="input-field input-with-prefix" />
        </div>
      </div>
      
      <div class="input-group">
        <label>Moneda</label>
        <select v-model="currency" class="input-field">
          <option value="PEN">Soles (PEN)</option>
          <option value="USD">Dólares (USD)</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>Tasa de interés (TEA)</label>
        <div class="input-wrapper">
          <input type="number" v-model="teaRate" class="input-field input-with-suffix" />
          <span class="percentage-suffix">%</span>
        </div>
      </div>
      
      <div class="input-group">
        <label>Plazo</label>
        <select v-model="periods" class="input-field">
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
          <option value="36">36 meses</option>
          <option value="48">48 meses</option>
          <option value="60">60 meses</option>
        </select>
      </div>
      
      <button class="btn btn-primary btn-block">Calcular crédito</button>
      
      <div class="results-grid">
        <div class="result-box">
          <span class="result-label">TCEA</span>
          <span class="result-value">{{ formattedTCEA }}%</span>
        </div>
        <div class="result-box">
          <span class="result-label">VAN</span>
          <span class="result-value">S/ {{ formattedVAN }}</span>
        </div>
        <div class="result-box">
          <span class="result-label">TIR</span>
          <span class="result-value">{{ formattedTIR }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCreditSimulator } from '../../application/useCreditSimulator.js';

const { loanAmount, currency, teaRate, periods, metrics } = useCreditSimulator();

const formattedTCEA = computed(() => metrics.value.tcea.toFixed(1));
// Formateamos VAN separando por comas (miles)
const formattedVAN = computed(() => {
  return Math.max(0, metrics.value.van).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
});
const formattedTIR = computed(() => metrics.value.tir.toFixed(1));

</script>

<style scoped>
.simulator-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 400px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.icon-btn {
  color: var(--text-light);
  cursor: pointer;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.currency-prefix {
  position: absolute;
  left: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.percentage-suffix {
  position: absolute;
  right: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.input-field {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s ease;
  background-color: var(--bg-color);
}

.input-with-prefix {
  padding-left: 36px !important;
}

.input-with-suffix {
  padding-right: 36px !important;
}

.input-field:focus {
  border-color: var(--primary-color);
}

.btn-block {
  width: 100%;
  margin-top: 8px;
  padding: 14px;
  font-size: 1rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.result-box {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.result-label {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.result-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
}
</style>
