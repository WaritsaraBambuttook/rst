<template>
  <div class="SignSecure ">
    <div class="q-pa-md row  card setPosition">
      <div class="col-12 text-center q-mt-md">
        <div class="row">
          <div class="col-12 q-ma-sm text-h4">
            {{ title }}
          </div>
          <div class="col-12 q-ma-sm text-h6">
            {{ detail }}
          </div>
        </div>
      </div>
      <div class="col-12  q-pb-xl text-center">
        <div class="row ">
          <div
            class="col-12 col-sm-4 q-pa-sm text-center  text-subtitle1"
            v-for="content in content"
            :key="content.id"
          >
            <q-card class="my-card q-pb-md q-pt-md setCard">
              <q-card-section>
                <div class="row">
                  <div class="col-12 q-pa-sm">
                    <q-img :src="content.icon" class="iconImg" />
                  </div>
                  <div class="col-12  q-pa-md">
                    {{ content.title }}
                  </div>
                  <div class="col-12  q-pa-sm">
                    {{ content.detail }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    detail: { type: String },
    content: { type: Array },
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
.setCard {
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .setPosition {
    margin-left: 5%;
    margin-right: 5%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1319px) {
  .setPosition {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
