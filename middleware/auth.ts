import { defineNuxtRouteMiddleware, useCookie } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");

  if (to.path.startsWith("/admin") && !token.value) {
    return navigateTo("/auth");
  }

  if (to.path === "/auth" && token.value) {
    return navigateTo("/admin");
  }
});
