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
          <p class="title">Получите бесплатную пиццу и 30 кристаллов в Brawl Stars!</p>
          <a @click="onButtonClick" class="styles_button__DNJ4N button"><span>Забрать в игре</span></a>

          <DownloadButtons />
        </div>
      </div>
    </main>

    <Footer />

    <div v-if="isModalVisible" id="modal" class="modal">
      <div class="modal__content">
        <div class="modal__point">
          Чтобы забрать бесплатную пиццу и 30 кристаллов<br><br>
          1. Подпишись на канал PIN BRAWL <a href="https://t.me/+ly1qydXEGaJhMThi" target="_blank">Подписаться ></a><br>
					2. Подпишись на канал BS White <a href="https://t.me/+9_Eny8t_9e9jZGRi" target="_blank">Подписаться ></a><br><br><br>
		      PIN BRAWL
        </div>

        <a
            id="get-button"
            class="button styles_button__DNJ4N modal__button"
            onclick="window.open('https://t.me/+ly1qydXEGaJhMThi', '_blank')"
        >
          <span>Подписаться</span>
        </a>
        BS White
				<a
            id="get-button"
            class="button styles_button__DNJ4N modal__button"
            onclick="window.open('https://t.me/+9_Eny8t_9e9jZGRi', '_blank')"
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