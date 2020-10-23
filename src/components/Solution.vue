<template>
  <div class="solotion text-center q-pa-xl ">
    <div class="row q-pt-xl ">
      <div class="col-12 q-mt-md title">
        {{ title }}
      </div>
      <div class="col-12 q-mt-xl detail">
        {{ detail }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, required: true },
    detail: { type: String, required: true },
  },
};
</script>
<style scoped>
.title {
  font-size: 60px;
}
.detail {
  font-size: 25px;
}
.solotion {
  background: wheat;
  width: 100%;
}
</style>
