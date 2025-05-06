// ~/msw/worker.ts
import { http, HttpResponse } from "msw";

export default defineNuxtMswWorkerOption(() => {
  const handlers = [
    // Intercept "GET /api/user2" requests...
    http.get("/api/user", () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json({
        message: "Hello Worker!",
      });
    }),
  ];
  // You can access any browser api
  // window.location.href

  return {
    handlers,
    workerOptions: {
      // ...you can pass options to worker.start()
      // onUnhandledRequest: 'bypass',
    },
    onWorkerStarted(worker, nuxtApp) {
      // Module will setup worker when nuxt run client plugin
      // Means this function will be called after plugin call worker.start()

      nuxtApp.hook("app:mounted", () => {
        // const route = useRoute()
        // console.log(worker.listHandlers())
      });
    },
  };
});
