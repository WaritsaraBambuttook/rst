<template>
  <div class="SignSecure ">
    <div class="q-pa-md row  card setPosition">
      <div class="row text-center q-mt-md">
        <div class="col-12 q-ma-sm text-h4">
          {{ title }}
        </div>
        <div class="col-12 q-ma-sm text-h6">
          {{ detail }}
        </div>
      </div>
      <div class="row q-mb-md ">
        <div
          class="col q-ma-md text-center text-subtitle1"
          v-for="content in content"
          :key="content.id"
        >
          <q-card class="my-card q-mb-md q-mt-md setCard">
            <q-card-section class="">
              <div class="col-12 q-ma-sm">
                <q-img :src="content.icon" class="iconImg" />
              </div>
              <div class="col-12  q-ma-md">
                {{ content.title }}
              </div>
              <div class="col-12  q-ma-sm">
                {{ content.detail }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "จุดเด่นของระบบ iSignSecure",
      detail: "ระบบการลงลายเซ็นเพื่อการยินยอมออนไลน์ สะดวก และตรวจสอบได้",
      content: [
        {
          id: "1",
          title: "การยืนยันตัวตน KYC",
          detail:
            "ระบบ KYC ที่มาพร้อมการยืนยันตัวตน 2 ขั้น จากแอปพลิเคชันและรหัส ที่เป็นได้ทั้งตัวเลข ลายนิ้วมือ และใบหน้า",
          icon: "https://www.flaticon.com/svg/static/icons/svg/633/633869.svg",
        },
        {
          id: "2",
          title: "ลายเซ็นดิจิทัล",
          detail:
            "ระบบ KYC ที่มาพร้อมการยืนยันตัวตน 2 ขั้น จากแอปพลิเคชันและรหัส ที่เป็นได้ทั้งตัวเลข ลายนิ้วมือ และใบหน้า",
          icon:
            "https://www.flaticon.com/svg/static/icons/svg/3063/3063761.svg",
        },
        {
          id: "3",
          title: "ระบบจัดการฐานข้อมูล",
          detail:
            "สร้างตามมาตรฐานความปลอดภัยขั้นสูงระดับ AAL3 พร้อมระบบซิงค์เอกสารเพื่อเห็นเวอร์ชันล่าสุดเสมอ",
          icon:
            "https://www.flaticon.com/svg/static/icons/svg/3064/3064155.svg",
        },
      ],
    };
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
</style>
