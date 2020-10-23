<template>
  <div>
    <div class="q-col-gutter-md row items-start full-height ">
      <q-img
        src="https://static.wixstatic.com/media/74c934_5587dd7db899414d9e432a7d49199c78~mv2.jpg/v1/fill/w_1439,h_603,al_c,q_85,usm_0.66_1.00_0.01/74c934_5587dd7db899414d9e432a7d49199c78~mv2.webp"
      >
        <div class="row absolute-full flex flex-center text-center">
          <div class="col-12 text-body2  text">
            {{ detail }}

            <div class="q-pt-xl">
              <q-btn class="btn" label="ขอคำปรึกษาจากทีมงาน" />
            </div>
          </div>
        </div>
      </q-img>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: "สร้างระบบ KYC สำหรับองค์กรของคุณ",
    };
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
