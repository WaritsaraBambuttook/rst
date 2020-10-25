<template>
  <div class="solotion text-center q-pa-xl ">
    <div class="row q-pt-md ">
      <div class="col-12 q-mt-md title">
        {{ title }}
      </div>
      <div class="col-12 q-mt-xl detail">
        {{ detail }}
      </div>
      <div class="col-12 q-mt-xl detail">
        {{ detail2 }}
      </div>
      <div class="col-12 q-mt-xl detail">
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
.title {
  font-size: 30px;
}
.detail {
  font-size: 20px;
}
.solotion {
  background: rgba(0, 0, 0, 0.582);
  color: white;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .title {
    font-size: 16px;
  }
  .detail {
    font-size: 12px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1319px) {
  .title {
    font-size: 16px;
  }
  .detail {
    font-size: 14px;
  }
}
</style>
