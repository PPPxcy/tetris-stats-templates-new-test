export default defineNuxtPlugin((app) => {
    app.hooks.addHooks({
        'app:beforeMount': async () => {
            const router = useRouter();
            if (router.currentRoute.value.path !== '/') {
                return;
            }
            await navigateTo(window.__PATH__, { replace: true });
            window.location.reload();
        },
    });
});
