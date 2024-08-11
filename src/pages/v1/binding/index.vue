<script lang="ts" setup>
import { isNonNullish } from 'remeda'

const data = useData<{
	readonly user: {
		readonly avatar: string
	}

	readonly bot: {
		readonly avatar: string
	}
}>()
</script>

<template>
	<div class="w-fit bg-[#f1f1f1] p-7.5">
		<div class="flex flex-col gap-3.75">
			<div class="flex justify-between items-center gap-8">
				<template v-if="isNonNullish(data.user.avatar)">
					<img :src="data.user.avatar" alt="user.avatar" class="size-24 rounded-5"
						 style="box-shadow: 0 .6875rem 1.4375rem 0 #00000038;"/>
				</template>

				<v1-binding-status/>

				<template v-if="isNonNullish(data.bot.avatar)">
					<img :src="data.bot.avatar" alt="bot.avatar" class="size-24 rounded-5"
						 style="box-shadow: 0 .6875rem 1.4375rem #00000038;"/>
				</template>
			</div>

			<div/>

			<v1-binding-main/>
			<v1-binding-footer/>
		</div>
	</div>
</template>

<style lang="scss">
@import '~/styles/v1';
</style>