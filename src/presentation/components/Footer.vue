<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <div class="logo">
          <svg class="logo-icon" viewBox="0 0 40 40" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="var(--primary-color)"/>
            <path d="M9 25L35 15L32 10L6 20L9 25Z" fill="#00b4d8"/>
          </svg>
          <span class="logo-text">ALTOQUE</span>
        </div>
        <p class="footer-desc">
          Plataforma financiera especializada en la simulación y análisis de créditos vehiculares en Perú.
        </p>
        <p class="copyright">© 2026 Altoque Fintech - Todos los derechos reservados.</p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h4>Plataforma</h4>
          <a href="#simulador">Simulador</a>
          <a href="#beneficios">Beneficios</a>
        </div>
        
        <div class="link-group">
          <h4>Legal & Soporte</h4>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Contacto</a>
          <a href="#">Soporte</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: white;
  padding: 60px 0;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  max-width: 300px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.footer-desc {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 24px;
}

.copyright {
  font-size: 0.75rem;
  color: var(--text-light);
}

.footer-links {
  display: flex;
  gap: 60px;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-group h4 {
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.link-group a {
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.link-group a:hover {
  color: var(--primary-color);
}
</style>
