<template>
  <div class="row CompanyReady">
    <div class="col-12 col-sm-6">
      <div class="row">
        <div class="col-5 allImg ">
          <div class="q-ma-md">
            <q-img class="img1 " src="https://placeimg.com/500/300/nature" />
          </div>
          <div class="q-mr-xl q-mb-md">
            <q-img class="img2 " src="https://placeimg.com/500/300/nature" />
          </div>
          <div class="q-ma-md">
            <q-img class="img3" src="https://placeimg.com/500/300/nature" />
          </div>
        </div>
        <div class="col-7 allImg2 ">
          <div class="q-ma-md">
            <q-img class="img4 " src="https://placeimg.com/500/300/nature" />
          </div>
          <div class="q-ma-md">
            <q-img class="img5 " src="https://placeimg.com/500/300/nature" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 ">
      <q-card class="full-height card-background">
        <q-card-section>
          <div class="row ">
            <div class="col-12 text-h4 text-center title">
              {{ title }}
            </div>
            <div class="col-12 q-pa-md detail">
              {{ detail1 }}
            </div>
            <div class="col-12 q-pa-md detail">
              {{ detail2 }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "CompanyReady",
  props: {
    title: { type: String },
    detail1: { type: String },
    detail2: { type: String },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
/* .CompanyReady {
  margin-left: 20%;
  margin-right: 20%;
} */
.allImg {
  text-align: center;
}
.img1 {
  width: 144px;
  height: 156px;
}
.img2 {
  width: 146px;
  height: 119px;
}
.img3 {
  width: 128px;
  height: 180px;
}
.img4 {
  width: 179px;
  height: 240px;
}
.img5 {
  width: 179px;
  height: 210px;
}
.card-background {
  background-color: rgba(0, 0, 0, 0.582);
  color: white;
}
@media only screen and (max-width: 600px) {
  .allImg {
    display: none;
  }
  .allImg2 {
    display: none;
  }
  .title {
    font-size: 16px;
  }
  .detail {
    font-size: 12px;
  }
}
</style>
