<script lang="ts" setup>
import { z } from 'zod';
import { Status } from '~/types/status';

const { t } = useI18n();

const data = useData(
    z
        .union([
            z.object({
                type: z.union([
                    z.literal(Status.SUCCESS),
                    z.literal(Status.UNVERIFIED),
                    z.literal(Status.UNKNOWN),
                    z.literal(Status.ERROR),
                ]),
                prompt: z.string(),
            }),
            z.object({
                type: z.literal(Status.UNBIND),
                prompt: z.string(),
                bot: z.object({
                    name: z.string(),
                }),
            }),
        ])
        .readonly(),
);
</script>

<template>
    <i18n-t
        :keypath="`v1.binding.footer.${data.type}.text`"
        :style="{ 'font-weight': t(`v1.binding.footer.${data.type}.styles.fw`) }"
        tag="span"
        class="w-81 mx-auto font-template text-4 text-center text-[#52525C]"
    >
        <template v-slot:prompt>
            <span class="fw-500">“{{ data.prompt }}”</span>
        </template>
        <template v-if="data.type === Status.UNBIND" v-slot:botName>
            <span class="fw-500">{{ data.bot.name }}</span>
        </template>
    </i18n-t>
</template>
