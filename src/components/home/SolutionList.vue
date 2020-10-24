<template>
  <div class="solutionList">
    <div class="row setPosition text-center q-pa-xl">
      <div class="col-12 q-pa-xl title ">
        {{ title }}
      </div>
      <div class="col-12">
        <div class="row">
          <div
            class="col-12 col-sm-4 detail q-pa-sm"
            v-for="content in content"
            :key="content.id"
          >
            <q-card class="my-card card">
              <img class="img" :src="content.photoUrl" />
              <q-card-section class="q-pt-none q-pa-sm">
                {{ content.detail }}
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
    content: { type: Array },
  },
};
</script>
<style scoped>
.solutionList {
  background-color: #eff4fd;
}
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
}
.title {
  font-size: 35px;
}
.detail {
  text-align: center;
  font-size: 20px;
}
.card {
  height: 100%;
}
.img {
  height: 210px;
}
@media only screen and (max-width: 600px) {
  .setPosition {
    margin-left: 5%;
    margin-right: 5%;
  }
  .title {
    font-size: 16px;
  }
  .detail {
    text-align: center;
    font-size: 14px;
  }
  .img {
    height: 150px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1319px) {
  .setPosition {
    margin-left: 10%;
    margin-right: 10%;
  }
  .title {
    font-size: 20px;
  }
  .detail {
    text-align: center;
    font-size: 16px;
  }
}
</style>
