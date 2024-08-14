<script lang="ts" setup>
import type { VNode } from 'vue'
import Languages from '~/core/shared/languages'
import Trending from '~/core/shared/trending'
import V1TosInfo from '~/pages/v1/tos/info/index.vue'

const pages = ref<VNode[]>([])

onMounted(async () => {
	for (const lang of [Languages.enUS, Languages.zhCN]) {
		document.querySelector('template#data')!.innerHTML = JSON.stringify({
			_lang: lang,
			user: {
				avatar: 'https://tetr.io/user-content/avatars/5eb270aaeb7d4250d3f2fc47.jpg',
				name: 'SCDHH'
			},
			multiplayer: {
				lpm: 48.72,
				pps: 2.03,
				apm: 76.87,
				apl: 1.58,
				adpm: 102.31,
				vs: 170.51,
				adpl: 2.1,
				app: 0.63,
				ci: 37.15,
				dspp: 0.20,
				or: 0.42,
				ge: 0.26,
				lpm_trending: Trending.UP,
				apm_trending: Trending.DOWN,
				adpm_trending: Trending.KEEP
			},
			singleplayer: {
				'40l': '1m 10.2s',
				challenge: '289,085',
				marathon: '289,085'
			}
		})

		await nextTick()

		const rendered = h(V1TosInfo)

		pages.value.push(rendered)

		await nextTick()
	}
})
</script>

<template>
	<div class="flex flex-col p-2 gap-2">
		<template v-for="page in pages">
			<Component :is="page"/>
		</template>
	</div>
</template>