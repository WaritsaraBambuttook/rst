<template>
  <div>
    <div class="q-col-gutter-md row items-start full-height ">
      <q-img :src="bannerImg">
        <div class="row absolute-full flex flex-center text-center">
          <div class="col-12 text-body2  text">
            {{ bannerDetail }}

            <div class="q-pt-xl">
              <q-btn class="btn" :label="bannerButton" />
            </div>
          </div>
        </div>
      </q-img>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bannerImg: { type: String, required: true },
    bannerDetail: { type: String, required: true },
    bannerButton: { type: String, required: true },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.text {
  padding-left: 50%;
  font-size: 40px;
}
.btn {
  font-size: 20px;
  background-color: #69b0dc;
}
</style>
