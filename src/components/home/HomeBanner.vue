<template>
  <div>
    <div class=" row items-start full-height ">
      <q-img :src="bannerImg">
        <div class="row absolute-full  flex-center text-center">
          <div class="col text-body2  text">
            <div>
              {{ bannerDetail }}
            </div>

            <div class="button">
              <q-btn class="btn" @click="sendMail" :label="bannerButton" />
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
    bannerImg: { type: String },
    bannerDetail: { type: String },
    bannerButton: { type: String },
  },
  data() {
    return {};
  },
  methods: {
    sendMail() {
      window.open("mailto:junticha@thai-g.com?subject=สวัสดีค่ะ");
    },
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
.button {
  padding-top: 8%;
}
@media only screen and (max-width: 600px) {
  .text {
    font-size: 14px;
    padding-top: 5%;
  }
  .btn {
    font-size: 12px;
    background-color: #69b0dc;
  }
  .button {
    padding-top: 5px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1319px) {
  .text {
    font-size: 25px;
    padding-top: 8%;
  }
  .btn {
    font-size: 20px;
    background-color: #69b0dc;
  }
}
</style>
