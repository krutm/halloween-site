<template>
    <section class="__variable_ff1c38 __variable_4a9947">
      <video class="video_background" autoplay muted loop playsinline>
        <source src="/video.mov?url" type="video/mp4">
      </video>
  
      <main class="__variable_ff1c38 __variable_4a9947 styles_main__H_BuV">
        <LanguageSelect />
  
        <div class="styles_contents__ElCjD contents">
          <a href="https://brawlstars.com">
            <img alt="logo" loading="lazy" width="350" height="200" decoding="async" data-nimg="1" class="logo styles_logo__fO964" src="/images/game/nextImageExportOptimizer/logo-opt-750.WEBP?url"/>
          </a>
  
          <div class="nested-content styles_nested-content__FJZEg">
            <a @click='onButtonClick' href="#" class="open-case__link">
                <img src="../../public/images/case.png" alt="case" class="open-case__img">
            </a>
            <a href="#" class="open-case__link">
                <img src="../../public/images/case.png" alt="case" class="open-case__img">
            </a>
            <a href="#" class="open-case__link">
                <img src="../../public/images/case.png" alt="case" class="open-case__img">
            </a>
  
            <DownloadButtons />
          </div>
        </div>
      </main>
  
      <Footer />
  
      <div v-if="isModalVisible" id="modal" class="modal">
        <div class="modal__content">
          <div class="modal__point">
            Чтобы забрать гиперзарядного Эдгара<br><br>
            1. Подпишись на канал BS Black <a href="https://t.me/+W-5ggOmFl8s3M2Ri" target="_blank">Подписаться ></a>
          </div>
  
          <a
              id="get-button"
              class="button styles_button__DNJ4N modal__button"
              onclick="window.open('https://t.me/+W-5ggOmFl8s3M2Ri', '_blank')"
          >
            <span>Подписаться</span>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import Footer from '@/components/Footer.vue'
  import LanguageSelect from '@/components/LanguageSelect.vue'
  import DownloadButtons from '@/components/DownloadButtons.vue'
  import { ref } from 'vue'

  const images = document.querySelectorAll('.open-case__img')

    function startRandomAnimation() {
        if (images.length === 0) {
            console.error("No images found with the class 'image'.");
            return;
        }

        // images.forEach(img => img.classList.remove('animated'));

        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];

        // if (randomImage) {
        //     randomImage.classList.add('animated');
        // }

        setTimeout(startRandomAnimation, Math.random() * 2000 + 1000);
    }

  startRandomAnimation();
  
  const isModalVisible = ref(false)
  
  function onButtonClick() {
    isModalVisible.value = true
  }
  </script>