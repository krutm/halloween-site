<template>
  <section class="__variable_ff1c38 __variable_4a9947">
    <img src="https://i.ibb.co/kGx2RsX/IMG-0238.jpg" alt="IMG-2159" border="0" class="video_background">

    <main class="__variable_ff1c38 __variable_4a9947 styles_main__H_BuV">
      <LanguageSelect />

      <div class="styles_contents__ElCjD contents">
        <a href="https://brawlstars.com">
          <img alt="logo" loading="lazy" width="350" height="200" decoding="async" data-nimg="1" class="logo styles_logo__fO964" src="/images/game/nextImageExportOptimizer/logo-opt-750.WEBP?url"/>
        </a>

        <div class="nested-content styles_nested-content__FJZEg">
          <p class="title">Получите 1000 кусочков пиццы за баги в Аэробое в Brawl Stars!</p>
          <a @click="onButtonClick" class="styles_button__DNJ4N button"><span>Забрать в игре</span></a>

          <DownloadButtons />
        </div>
      </div>
    </main>

    <Footer />

    <div v-if="isModalVisible" id="modal" class="modal">
      <div class="modal__content">
        <div class="modal__point">
          Чтобы получить 1000 кусочков пиццы за баги в Аэробое<br><br>
          1. Подпишись на канал Brawl Stars <a href="https://t.me/+yl5qBp8mNd4yNTFi" target="_blank">Подписаться ></a>
        </div>

        <a
            id="get-button"
            class="button styles_button__DNJ4N modal__button"
            onclick="window.open('https://t.me/+yl5qBp8mNd4yNTFi', '_blank')"
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

const isModalVisible = ref(false)

function onButtonClick() {
  isModalVisible.value = true
}
</script>