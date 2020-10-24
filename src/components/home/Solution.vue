<template>
  <div class="solotion text-center q-pa-xl ">
    <div class="row q-pt-md ">
      <div class="col-12 q-mt-md " :style="{ 'font-size': fontSizeTitle }">
        {{ title }}
      </div>
      <div class="col-12 q-mt-xl " :style="{ 'font-size': fontSizeDetail }">
        {{ detail }}
      </div>
      <div class="col-12 q-mt-xl " :style="{ 'font-size': fontSizeDetail }">
        {{ detail2 }}
      </div>
      <div class="col-12 q-mt-xl " :style="{ 'font-size': fontSizeDetail }">
        {{ detail3 }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String },
    detail: { type: String },
    detail2: { type: String },
    detail3: { type: String },
    fontSizeTitle: { type: String },
    fontSizeDetail: { type: String },
  },
};
</script>
<style scoped>
/* .title {
  font-size: 60px;
}
.detail {
  font-size: 25px;
} */
.solotion {
  background: rgba(0, 0, 0, 0.582);
  color: white;
  width: 100%;
}
</style>
