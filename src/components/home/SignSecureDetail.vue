<template>
  <div class="row text-center">
    <div class="col-12 q-mt-xl">
      <q-img class="logo " :src="logo" style="height: 94px; max-width: 80px" />
    </div>
    <div class="col-12 q-mt-xl datail">
      {{ detail }}
    </div>
    <div class="row q-pa-xl">
      <div
        class="col-12 col-sm-6 q-pa-md"
        v-for="content in content"
        :key="content.id"
      >
        <div class=" text-h5 content_title ">
          {{ content.title }}
        </div>
        <div class=" text-h6 content_detail ">
          {{ content.detail }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    logo: { type: String, required: true },
    detail: { type: String, required: true },
    content: { type: Array, required: true },
  },
};
</script>
<style scoped>
.datail {
  font-size: 30px;
}
.content_title {
  font-size: 25px;
}
.content_detail {
  font-size: 18px;
}
</style>
