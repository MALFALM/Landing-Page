<template>
  <section class="about-section" id="nosotros">
    <div class="container text-center">
      <h2 class="section-title">El equipo detrás de Altoque</h2>
      <p class="section-subtitle">
        Conoce a los estudiantes de ingeniería que diseñaron y desarrollaron esta plataforma financiera.
      </p>

      <div class="carousel-container">
        <button class="carousel-btn prev-btn" @click="scrollLeft">❮</button>
        
        <div class="carousel-track" ref="carouselTrack">
          <div class="developer-card" v-for="(dev, index) in developers" :key="index">
            <div class="dev-photo">
              <!-- Un placeholder estilizado para fotos (puedes reemplazar la URL luego) -->
              <img :src="dev.photoUrl" :alt="`Foto de ${dev.name}`" />
            </div>
            <h3 class="dev-name">{{ dev.name }}</h3>
            <p class="dev-role">{{ dev.role }}</p>
            <p class="dev-desc">{{ dev.description }}</p>
          </div>
        </div>

        <button class="carousel-btn next-btn" @click="scrollRight">❯</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const developers = [
  {
    name: 'Lucia Ly Aslla',
    role: 'Product Owner (Ing. Sistemas)',
    description: 'Responsable de priorizar requerimientos financieros y estructurar la aplicación.',
    photoUrl: 'https://ui-avatars.com/api/?name=Lucia+Ly&background=0d52ff&color=fff&size=150'
  },
  {
    name: 'Maikol Garcia Zavaleta',
    role: 'Scrum Master (Ing. Sistemas)',
    description: 'Encargado de facilitar el proceso ágil y organizar las historias de usuario.',
    photoUrl: 'https://ui-avatars.com/api/?name=Maikol+Garcia&background=00b4d8&color=fff&size=150'
  },
  {
    name: 'Mauricio García Garay',
    role: 'Developer (Ing. Ciberseguridad)',
    description: 'Especialista en fórmulas matemáticas y cálculo del flujo de caja.',
    photoUrl: 'https://ui-avatars.com/api/?name=Mauricio+Garcia&background=0d52ff&color=fff&size=150'
  },
  {
    name: 'Kevin Moreyra Ivarra',
    role: 'Developer (Ing. Ciberseguridad)',
    description: 'Estructuración de base de datos y diseño del flujo de procesos del aplicativo.',
    photoUrl: 'https://ui-avatars.com/api/?name=Kevin+Moreyra&background=00b4d8&color=fff&size=150'
  },
  {
    name: 'Mathias Cárdenas Huamán',
    role: 'Developer (Ing. Software)',
    description: 'Responsable del diseño visual frontend y estructuración de la interfaz.',
    photoUrl: 'https://ui-avatars.com/api/?name=Mathias+Cardenas&background=0d52ff&color=fff&size=150'
  },
  {
    name: 'Fátima Florez Shimabukuro',
    role: 'Developer',
    description: 'Encargada del análisis de datos financieros y variables crediticias.',
    photoUrl: 'https://ui-avatars.com/api/?name=Fatima+Florez&background=00b4d8&color=fff&size=150'
  }
];

const carouselTrack = ref(null);

const scrollLeft = () => {
  if (carouselTrack.value) {
    // Desplaza aproximadamente el ancho de una tarjeta + gap
    carouselTrack.value.scrollBy({ left: -320, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carouselTrack.value) {
    carouselTrack.value.scrollBy({ left: 320, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
}

.carousel-container {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 24px 8px; /* Padding for shadows */
  -ms-overflow-style: none; /* Hide scrollbar IE */
  scrollbar-width: none; /* Hide scrollbar Firefox */
}

.carousel-track::-webkit-scrollbar {
  display: none; /* Hide scrollbar Chrome/Safari */
}

.developer-card {
  flex: 0 0 calc(100% - 16px); /* Full width on mobile minus padding */
  max-width: 300px;
  scroll-snap-align: center;
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 768px) {
  .developer-card {
    flex: 0 0 calc(50% - 12px);
  }
}

@media (min-width: 1024px) {
  .developer-card {
    flex: 0 0 calc(33.333% - 16px);
  }
}

.developer-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(13, 82, 255, 0.2);
}

.dev-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--bg-color);
  box-shadow: var(--shadow-sm);
}

.dev-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dev-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.dev-role {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 12px;
}

.dev-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Controles del Carrusel */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
  color: var(--text-primary);
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.carousel-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.prev-btn {
  left: -24px;
}

.next-btn {
  right: -24px;
}

/* Hide buttons on very small screens or handle overflow */
@media (max-width: 600px) {
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }
}
</style>
