import type { FormatDistanceToNowOptions } from 'date-fns';
import { enUS, zhCN } from 'date-fns/locale';

const dateFnsMapping = {
    'zh-CN': zhCN,
    'en-US': enUS,
};

export function formatDateFns(
    formater: (options?: FormatDistanceToNowOptions) => string,
    options?: FormatDistanceToNowOptions,
): Ref<string> {
    const nuxtApp = useNuxtApp();
    const { locale } = useI18n();

    const formatedText = ref(formater({ ...options, locale: dateFnsMapping[locale.value] }));

    nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
        formatedText.value = formater({ ...options, locale: dateFnsMapping[newLocale] });
    });

    return formatedText;
}
