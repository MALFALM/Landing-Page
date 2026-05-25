<template>
  <section class="transparency-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title">Transparencia en cada cuota</h2>
        <p class="section-subtitle">
          Visualiza exactamente cómo se distribuyen tus pagos: capital, intereses y seguros. (Actualizado en tiempo real)
        </p>
      </div>
      
      <div class="table-container">
        <table class="schedule-table">
          <thead>
            <tr>
              <th>N° Cuota</th>
              <th>Fecha</th>
              <th>Saldo Inicial</th>
              <th>Amortización</th>
              <th>Interés</th>
              <th>Seguro</th>
              <th class="highlight-col">Cuota Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in displaySchedule" :key="row.month">
              <td>{{ row.month }}</td>
              <td>{{ getFakeDate(row.month) }}</td>
              <td>{{ formatCurrency(row.initialBalance) }}</td>
              <td>{{ formatCurrency(row.amortization) }}</td>
              <td>{{ formatCurrency(row.interest) }}</td>
              <td>{{ formatCurrency(row.insurance) }}</td>
              <td class="highlight-col font-bold text-primary">{{ formatCurrency(row.totalQuota) }}</td>
            </tr>
          </tbody>
        </table>
        
        <div class="table-footer" v-if="schedule.length > 6">
          <button class="btn btn-ghost text-primary text-sm font-semibold">Ver cronograma completo ↓</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useCreditSimulator } from '../../application/useCreditSimulator.js';

const { schedule, currency } = useCreditSimulator();

// Mostramos solo los primeros 6 meses para la Landing Page
const displaySchedule = computed(() => {
  return schedule.value.slice(0, 6);
});

const formatCurrency = (value) => {
  const prefix = currency.value === 'PEN' ? 'S/' : '$';
  return `${prefix} ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const getFakeDate = (monthOffset) => {
  const date = new Date(2024, 4 + monthOffset, 15); // Empezando aprox en Jun 2024
  return date.toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
};
</script>

<style scoped>
.transparency-section {
  padding: 100px 0;
  background-color: var(--bg-color);
}

.table-container {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  overflow: hidden;
  margin-top: 40px;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.schedule-table th {
  background-color: #f8fafc;
  padding: 16px 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
}

.schedule-table td {
  padding: 16px 20px;
  font-size: 0.875rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.schedule-table tbody tr:last-child td {
  border-bottom: none;
}

.schedule-table tbody tr:hover {
  background-color: #f8faff;
}

.highlight-col {
  background-color: rgba(13, 82, 255, 0.03);
}

.table-footer {
  padding: 16px;
  text-align: center;
  border-top: 1px solid var(--border-color);
  background-color: #f8fafc;
}
</style>
