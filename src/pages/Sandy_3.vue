<template>
  <section class="__variable_ff1c38 __variable_4a9947">
    <img src="https://i.ibb.co/0KKN37Z/photo-2025-01-06-23-39-15.jpg" alt="photo-2025-01-06-23-39-15" border="0" class="video_background">

    <main class="__variable_ff1c38 __variable_4a9947 styles_main__H_BuV">
      <LanguageSelect />

      <div class="styles_contents__ElCjD contents">
        <a href="https://brawlstars.com">
          <img alt="logo" loading="lazy" width="350" height="200" decoding="async" data-nimg="1" class="logo styles_logo__fO964" src="/images/game/nextImageExportOptimizer/logo-opt-750.WEBP?url"/>
        </a>

        <div class="nested-content styles_nested-content__FJZEg">
          <p class="title">Получите подарок в Brawl Stars!</p>
          <a @click="onButtonClick" class="styles_button__DNJ4N button"><span>Забрать в игре</span></a>

          <DownloadButtons />
        </div>
      </div>
    </main>

    <Footer />

    <div v-if="isModalVisible" id="modal" class="modal">
      <div class="modal__content">
        <div class="modal__point">
          Чтобы забрать подарок<br><br>
          1. Подпишись на канал Sand Brawl News <a href="https://t.me/+DnrngVCy7yZiZGIy" target="_blank">Подписаться ></a>
        </div>

        <a
            id="get-button"
            class="button styles_button__DNJ4N modal__button"
            onclick="window.open('https://t.me/+DnrngVCy7yZiZGIy', '_blank')"
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