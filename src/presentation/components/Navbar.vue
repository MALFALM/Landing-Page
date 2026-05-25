<template>
  <header class="navbar-wrapper">
    <div class="container navbar">
      <div class="logo">
        <svg class="logo-icon" viewBox="0 0 40 40" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="var(--primary-color)"/>
          <path d="M9 25L35 15L32 10L6 20L9 25Z" fill="#00b4d8"/>
        </svg>
        <span class="logo-text">ALTOQUE</span>
      </div>
      <nav class="nav-links">
        <a href="#inicio" class="active">Inicio</a>
        <a href="#simulador">Simulador</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#nosotros">Nosotros</a>
      </nav>
      <div class="nav-actions">
        <button class="btn btn-ghost">Login</button>
        <button class="btn btn-primary">Probar simulador</button>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(248, 250, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: 0.05em;
}

.nav-links {
  display: none;
  gap: 2rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-links a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s ease;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--primary-color);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
