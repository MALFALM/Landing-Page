<template>
  <div class="landing-page">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <TransparencySection />
      <AboutSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import StepsSection from '../components/StepsSection.vue';
import TransparencySection from '../components/TransparencySection.vue';
import AboutSection from '../components/AboutSection.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
