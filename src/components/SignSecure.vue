<template>
  <div class="SignSecure ">
    <div class="q-pa-md row  card setPosition">
      <div class="row text-center q-mt-md">
        <div class="col-12 q-ma-sm text-h4">
          {{ title }}
        </div>
        <div class="col-12 q-ma-sm text-h6">
          {{ detail }}
        </div>
      </div>
      <div class="row q-mb-md ">
        <div
          class="col q-ma-md text-center text-subtitle1"
          v-for="content in content"
          :key="content.id"
        >
          <q-card class="my-card q-mb-md q-mt-md setCard">
            <q-card-section class="">
              <div class="col-12 q-ma-sm">
                <q-img :src="content.icon" class="iconImg" />
              </div>
              <div class="col-12  q-ma-md">
                {{ content.title }}
              </div>
              <div class="col-12  q-ma-sm">
                {{ content.detail }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    detail: { type: String, required: true },
    content: { type: Array, required: true },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.SignSecure {
  background-color: #eff4fd;
}
.card {
  height: 100%;
  justify-content: center;
}
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
}
/* .setHeight {
  height: auto;
} */
.iconImg {
  height: 50px;
  max-width: 50px;
}
</style>
