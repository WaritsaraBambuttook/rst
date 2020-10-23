<template>
  <div class="row CompanyReady">
    <div class="col-6">
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
        <div class="col-7">
          <div class="q-ma-md">
            <q-img class="img4 " src="https://placeimg.com/500/300/nature" />
          </div>
          <div class="q-ma-md">
            <q-img class="img5 " src="https://placeimg.com/500/300/nature" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 q-pa-md ">
      <q-card class="full-height">
        <q-card-section>
          <div class="row ">
            <div class="col-12 text-h4 text-center">
              {{ title }}
            </div>
            <div class="col-12 q-pa-md">
              {{ detail }}
            </div>
            <div class="col-12 q-pa-md">
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
  data() {
    return {
      title: "องค์กรของคุณพร้อมหรือยัง?",
      detail:
        "การเตรียมพร้อมระบบองค์กรของคุณให้สอดรับกับพ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล ดังที่รัฐบาลได้เสนอให้ผู้ประกอบการไทยเตรียมพร้อม ทำระบบของธุรกิจและบริการของตน บนเครือข่ายอินเตอร์เน็ตให้สอดรับกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล ซึ่งได้ดำเนินการตามหลัการการคุ้มครองข้อมูลส่วนบุคคลมาตรฐานยุโรป หรือ “GDPR” (EU General Data Protection Regulation)โดยเฉพาะในส่วนของขั้นตอนกระบวนการขอคำยินยอม และการยืนยันด้วยลายเซ็นกลายเป็นส่วนสำคัญของ พ.ร.บ. ฉบับนี้",
      detail2:
        "บริษัทของเราได้ศึกษาข้อมูลเชิงเทคนิคและกฎหมาย เพื่อสร้างระบบกระบวนการขอคำยินยอม และการยืนยันด้วยลายเซ็น จนสร้างสรรค์เป็นบริการiSignSecure ที่พร้อมจะผสานกับระบบบริการออนไลน์ของท่านได้ทันที",
    };
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
</style>
