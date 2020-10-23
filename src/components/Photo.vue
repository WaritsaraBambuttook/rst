<template>
  <div class="row q-mt-xl text-center">
    <div
      class="col-4 "
      v-for="logo in logo"
      :key="logo.id"
      :style="{ 'background-color': logo.color }"
    >
      <q-img class="logo q-mt-md" :src="logo.url" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: [
        {
          id: "1",
          url:
            "https://static.wixstatic.com/media/74c934_d97836d6397648bb94720857f83d91af~mv2.png/v1/fill/w_335,h_528,al_c,q_85,usm_0.66_1.00_0.01/1ss.webp",
          color: "#2B3856",
        },
        {
          id: "2",
          url:
            "https://static.wixstatic.com/media/74c934_ad7934fc2a374d6a95f8e49f6243d077~mv2.png/v1/fill/w_302,h_504,al_c,q_85,usm_0.66_1.00_0.01/2ss.webp",
          color: "#616D7E",
        },
        {
          id: "3",
          url:
            "https://static.wixstatic.com/media/74c934_9030360934414db5ac914938282cf7ef~mv2.png/v1/fill/w_282,h_504,al_c,q_85,usm_0.66_1.00_0.01/3ss.webp",
          color: "#BCC6CC",
        },
      ],
    };
  },
};
</script>
<style scoped>
.logo {
  width: 270px;
  height: 504px;
}
</style>
