<template>
  <div class="row text-center">
    <div class="col-12 q-mt-xl">
      <q-img class="logo " :src="logo" style="height: 94px; max-width: 80px" />
    </div>
    <div class="col-12 q-mt-xl datail">
      {{ detail }}
    </div>
    <div class="row q-ma-xl">
      <div class="col-6 " v-for="content in content" :key="content.id">
        <div class="q-ma-md text-h5 content_title ">
          {{ content.title }}
        </div>
        <div class="q-ma-xl text-h6 content_detail ">
          {{ content.detail }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo:
        "https://static.wixstatic.com/media/74c934_d8b1b749bd8e452288b7a311691e3f8f~mv2.png/v1/crop/x_0,y_16,w_429,h_507/fill/w_53,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo%20mobile%20key-02.webp",
      detail:
        "iSignSecure ระบบเซ็นเอกสารดิจิทัลพร้อมผสานเข้ากับทุกธุรกิจในโลกออนไลน์​",
      content: [
        {
          id: "1",
          title: "1.ยืนยันตัวผู้เซ็นเอกสารได้ถูกต้อง",
          detail:
            "การใช้งานเซ็นเอกสาร จะผ่านระบบยืนยันตัวตน 2 ขั้น ขั้นที่ 1 คือ การสแกน Dynamic QRCode เพื่อระบุถึงเอกสารที่จะเซ็น ขั้นที่ 2 คือ การใช้แอปพลิเคชันที่มีการรหัส ที่เป็นได้ทั้งตัวเลข ลายนิ้วมือ และใบหน้า",
        },
        {
          id: "2",
          title: "2.ทุกข้อมูลปลอดภัย",
          detail:
            "ระบบการสร้าง เซ็น และเก็บเอกสารที่เซ็น เราออกแบบตามมาตรฐานความปลอดภัยขั้นสูงระดับ AAL3",
        },
      ],
    };
  },
};
</script>
<style scoped>
.datail {
  font-size: 30px;
}
.content_title {
  font-size: 25px;
}
.content_detail {
  font-size: 18px;
}
</style>
