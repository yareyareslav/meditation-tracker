<script setup lang="ts">
import AirIcon from '@/components/icons/AirIcon.vue'
import MeditatorIcon from '@/components/icons/MeditatorIcon.vue'
import SpiralIcon from '@/components/icons/SpiralIcon.vue'
import YinYangIcon from '@/components/icons/YinYangIcon.vue'
import FeelingCard from './FeelingCard.vue'
import { useProfileStore } from '@/components/shared/stores/profile.store.ts'
import { onMounted } from 'vue'

const feelings = [
  {
    icon: YinYangIcon,
    text: 'Calm',
  },
  {
    icon: AirIcon,
    text: 'Relaxed',
  },
  {
    icon: MeditatorIcon,
    text: 'Focused',
  },
  {
    icon: SpiralIcon,
    text: 'Worried',
  },
]

const profileStore = useProfileStore()

onMounted(() => {
  profileStore.fetchProfile()
})

</script>

<template>
  <div class="profile">
    <img
      class="profile__avatar"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fklike.net%2Fuploads%2Fposts%2F2019-11%2F1572607597_2.jpg&f=1&nofb=1&ipt=ae14aaf7348350b45be857923c82bed4b3b510c705e8c943ff35870ebb27a00f"
      alt="avatar"
    />
    <div class="greetings">
      <h2 class="greetings__welcome">
        Доброе пожаловать, {{ profileStore.getProfile?.username }}!
      </h2>
      <p class="greetings__feeling">Как вы себя сегодня чувстсвуете?</p>
    </div>
    <div class="feelings">
      <FeelingCard
        v-for="feeling in feelings"
        :key="feeling.text"
        :icon="feeling.icon"
        :text="feeling.text"
      />
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.profile__avatar {
  overflow: hidden;

  width: 130px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  object-fit: cover;
}
.greetings {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.greetings__welcome {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-white);
}
.greetings__feeling {
  font-size: 1.5rem;
  color: var(--color-white-inactive);
}
.feelings {
  display: flex;
  gap: 20px;
}
</style>
