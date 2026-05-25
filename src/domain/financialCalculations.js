/**
 * Calcula la cuota mensual utilizando el método francés.
 * @param {number} p Monto principal (préstamo)
 * @param {number} i Tasa de interés efectiva del periodo (ej. mensual, expresada en decimal)
 * @param {number} n Número de periodos (plazo)
 * @returns {number} Valor de la cuota constante
 */
export function calculateFrenchQuota(p, i, n) {
    if (i === 0) return p / n;
    return p * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
}

/**
 * Calcula el cronograma de pagos usando método francés.
 * @param {number} loanAmount Monto del préstamo
 * @param {number} monthlyRate Tasa de interés mensual (decimal)
 * @param {number} periods Plazo en meses
 * @param {number} monthlyInsurance Costo de seguro mensual (opcional)
 * @returns {Array} Cronograma de pagos
 */
export function generateSchedule(loanAmount, monthlyRate, periods, monthlyInsurance = 0) {
    const quota = calculateFrenchQuota(loanAmount, monthlyRate, periods);
    let balance = loanAmount;
    const schedule = [];

    for (let month = 1; month <= periods; month++) {
        const interest = balance * monthlyRate;
        const amortization = quota - interest;
        const totalQuota = quota + monthlyInsurance;
        
        schedule.push({
            month,
            initialBalance: balance,
            amortization,
            interest,
            insurance: monthlyInsurance,
            totalQuota
        });

        balance -= amortization;
    }
    return schedule;
}

/**
 * Calcula el Valor Actual Neto (VAN)
 * @param {number} initialInvestment Monto del préstamo (positivo o negativo según perspectiva, usamos negativo para inversión)
 * @param {Array<number>} cashFlows Flujos de caja futuros (cuotas)
 * @param {number} discountRate Tasa de descuento por periodo
 * @returns {number} VAN
 */
export function calculateNPV(initialInvestment, cashFlows, discountRate) {
    let npv = -initialInvestment;
    for (let t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + discountRate, t + 1);
    }
    return npv;
}

/**
 * Calcula la Tasa Interna de Retorno (TIR)
 * Utiliza el método de Newton-Raphson para aproximar la raíz.
 * @param {number} initialInvestment Monto inicial (positivo o negativo)
 * @param {Array<number>} cashFlows Flujos de pagos
 * @returns {number} TIR por periodo
 */
export function calculateIRR(initialInvestment, cashFlows) {
    const maxIterations = 1000;
    const precision = 1e-7;
    let rate = 0.1; // guess inicial del 10%

    for (let i = 0; i < maxIterations; i++) {
        let npv = -initialInvestment;
        let derivativeNpv = 0;

        for (let t = 0; t < cashFlows.length; t++) {
            const time = t + 1;
            const factor = Math.pow(1 + rate, time);
            npv += cashFlows[t] / factor;
            derivativeNpv -= (time * cashFlows[t]) / (factor * (1 + rate));
        }

        const newRate = rate - npv / derivativeNpv;
        if (Math.abs(newRate - rate) < precision) {
            return newRate;
        }
        rate = newRate;
    }
    return rate; // Aproximación
}

/**
 * Convierte una tasa nominal a efectiva.
 * @param {number} nominalRate Tasa nominal anual (decimal)
 * @param {number} capitalizationPeriods Cantidad de periodos de capitalización en el año
 * @returns {number} Tasa efectiva anual (TEA)
 */
export function nominalToEffective(nominalRate, capitalizationPeriods) {
    return Math.pow(1 + (nominalRate / capitalizationPeriods), capitalizationPeriods) - 1;
}

/**
 * Convierte una tasa efectiva anual a tasa efectiva mensual (o del periodo).
 * @param {number} tea Tasa efectiva anual (decimal)
 * @param {number} periodsInYear Cantidad de periodos en el año (12 para mensual)
 * @returns {number} Tasa efectiva del periodo
 */
export function effectiveAnnualToPeriod(tea, periodsInYear = 12) {
    return Math.pow(1 + tea, 1 / periodsInYear) - 1;
}

/**
 * Calcula la TCEA (Tasa de Costo Efectivo Anual) a partir de una TIR mensual
 * @param {number} monthlyIRR TIR mensual
 * @returns {number} TCEA
 */
export function calculateTCEA(monthlyIRR) {
    return Math.pow(1 + monthlyIRR, 12) - 1;
}
