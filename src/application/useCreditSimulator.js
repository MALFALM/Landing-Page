import { ref, computed } from 'vue';
import { 
    generateSchedule, 
    effectiveAnnualToPeriod, 
    calculateNPV, 
    calculateIRR, 
    calculateTCEA 
} from '../domain/financialCalculations.js';

export function useCreditSimulator() {
    const loanAmount = ref(65000);
    const currency = ref('PEN');
    const teaRate = ref(12); // porcentaje
    const periods = ref(12); // meses
    const monthlyInsurance = ref(65.00); // seguro de desgravamen o vehicular mensual ejemplo

    const schedule = computed(() => {
        const amount = loanAmount.value;
        const teaDecimal = teaRate.value / 100;
        const monthlyRate = effectiveAnnualToPeriod(teaDecimal, 12);
        
        return generateSchedule(amount, monthlyRate, periods.value, monthlyInsurance.value);
    });

    const metrics = computed(() => {
        if (!schedule.value || schedule.value.length === 0) return { van: 0, tir: 0, tcea: 0 };
        
        const amount = loanAmount.value;
        const cashFlows = schedule.value.map(item => item.totalQuota);
        
        // Tasa de descuento asumida (COK) del 10% TEA para calcular el VAN del usuario
        const discountRate = effectiveAnnualToPeriod(0.1, 12); 
        
        // El VAN desde la perspectiva de inversión: desembolso (amount) y cobros (cashFlows)
        const van = calculateNPV(amount, cashFlows, discountRate);
        const monthlyIRR = calculateIRR(amount, cashFlows);
        const tcea = calculateTCEA(monthlyIRR);

        return {
            van: van,
            tir: (Math.pow(1 + monthlyIRR, 12) - 1) * 100, // TIR anualizada efectiva
            tcea: tcea * 100
        };
    });

    return {
        loanAmount,
        currency,
        teaRate,
        periods,
        monthlyInsurance,
        schedule,
        metrics
    };
}
