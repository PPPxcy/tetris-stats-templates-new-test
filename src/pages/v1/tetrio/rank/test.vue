<script lang="ts" setup>
import type { VNode } from 'vue';
import V1TetrioRank from '~/pages/v1/tetrio/rank/index.vue';

const pages = ref<VNode[]>([]);

onMounted(async () => {
    window.__DATA__ = JSON.stringify({
        items: {
            'x+': { trending: 5, require_tr: 25000, players: 100 },
            x: { trending: -3, require_tr: 24000, players: 200 },
            u: { trending: 0, require_tr: 23000, players: 300 },
        },
        updated_at: new Date(),
    });

    await nextTick();

    const rendered = h(V1TetrioRank);

    pages.value.push(rendered);

    await nextTick();
});
</script>

<template>
    <div class="flex flex-col p-2 gap-2">
        <template v-for="page in pages">
            <Component :is="page" />
        </template>
    </div>
</template>
