<template>
  <div>
    <div class="row">
      <div class="col-12">
        <q-img :src="bannerImg">
          <div class="row absolute-full flex flex-center text-center ">
            <div class="setPosition ">
              <templateSolution
                class="templateSolution"
                :title="title"
                :detail="detail"
                :detail2="detail2"
                :detail3="detail3"
                :fontSizeTitle="fontTile"
                :fontSizeDetail="fontDetail"
              />
            </div>
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>
<script>
import templateSolution from "../home/Solution";
export default {
  props: {
    bannerImg: { type: String },
    title: { type: String },
    detail: { type: String },
    detail2: { type: String },
    detail3: { type: String },
    fontTile: { type: String },
    fontDetail: { type: String },
  },
  components: {
    templateSolution,
  },
};
</script>
<style scoped>
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
}

@media only screen and (max-width: 600px) {
  .setPosition {
    margin-left: 5%;
    margin-right: 5%;
  }
  .templateSolution {
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1441px) {
  .setPosition {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
