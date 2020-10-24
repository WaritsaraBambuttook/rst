<template>
  <div class="solutionList">
    <div class="row setPosition text-center q-pa-xl">
      <div class="q-pa-xl title ">
        {{ title }}
      </div>
      <div class="row">
        <div
          class="col-4 detail q-pa-sm"
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
</style>
