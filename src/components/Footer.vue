<template>
  <div class="Footer">
    <div class="row  setPosition">
      <div class="col-3 text-center">
        <q-img
          class="logo "
          src="https://static.wixstatic.com/media/74c934_d8b1b749bd8e452288b7a311691e3f8f~mv2.png/v1/crop/x_0,y_16,w_429,h_507/fill/w_53,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo%20mobile%20key-02.webp"
          style="height: 60px; max-width: 53px"
        />
      </div>
      <div class="col-4 text">
        {{ detail }}
      </div>
      <div class="col-5 q-pl-xl text">
        <div class="col ">
          <div class="row">
            <div class="col-2">
              <q-icon name="phone" size="md" />
            </div>
            <div class="col-10">
              087-197-0248
            </div>
          </div>
        </div>
        <div class="col q-pt-md">
          <div class="row">
            <div class="col-2">
              <q-icon name="location_on" size="md" />
            </div>
            <div class="col-10">
              บริษัท เรียลไทม์ แอนด์ ซีเคียว เทคโนโลยี จำกัด 184/87
              ฟอรั่มทาวเวอร์ ชั้น 18 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง
              กรุงเทพฯ 10310
            </div>
          </div>
        </div>
        <div class="col q-pt-md">
          <div class="row">
            <div class="col-2"></div>
            <div class="col-10">
              <q-img
                class="img"
                src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp"
                style="height: 20px; max-width: 10px"
              />
              <q-img
                class="img"
                src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/01ab6619093f45388d66736ec22e5885.webp"
                style="height: 20px; max-width: 15px"
              />
              <q-img
                src="https://static.wixstatic.com/media/203dcdc2ac8b48de89313f90d2a4cda1.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/203dcdc2ac8b48de89313f90d2a4cda1.webp"
                style="height: 20px; max-width: 15px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail:
        "เตรียมพร้อมองค์กรของคุณให้มีระบบ KYC และการเซ็นเอกสารรด้วยลายเซ็นดิจิทัลได้ทันที แค่ผสานเข้ากับระบบ iSignSecure ของเรา",
    };
  },
};
</script>
<style scoped>
.Footer {
  background-color: #1d2951;
}
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 50px;
  padding-bottom: 20px;
}
.text {
  color: white;
  font-size: 16px;
}
.img {
  margin-right: 10px;
}
</style>
