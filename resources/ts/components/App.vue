<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
    <IndexPage />
    <div class="locale-changer">
        <select v-model="$i18n.locale">
            <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
            >
                {{ locale }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import IndexPage from "@/pages/index-page.vue";

const mounted = ref(false);

onMounted(() => {
    mounted.value = true;
});

defineExpose({
    mounted,
});
</script>
