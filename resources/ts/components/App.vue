<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
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

<script lang="ts" setup></script>
