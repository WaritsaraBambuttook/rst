<template>
  <div class="row Home">
    <div class="col-12">
      <HomeBanner
        :bannerImg="bannerImg"
        :bannerDetail="bannerDetail"
        :bannerButton="bannerButton"
      />
    </div>
    <div>
      <div class="col-12 q-mt-xl setPosition">
        <company
          :title="companyTitle"
          :detail1="companyDetaill"
          :detail2="companyDetail2"
        />
      </div>
      <div class="col-12 q-mt-xl">
        <SignSecure
          :title="signSecureTitle"
          :detail="signSecureDetail"
          :content="signSecureContent"
        />
      </div>
      <div class="col-12 q-mt-xl setPosition">
        <SignSecureDetail
          :logo="signSecureDatilLogo"
          :detail="signSecureDatilDetail"
          :content="signSecureDatilContent"
        />
      </div>
      <div class="col-12 q-mt-xl">
        <Photo :logo="photo" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner";
import company from "../components/CompanyReady";
import SignSecure from "../components/SignSecure";
import SignSecureDetail from "../components/SignSecureDetail";
import Photo from "../components/Photo";
export default {
  components: {
    HomeBanner,
    company,
    SignSecure,
    SignSecureDetail,
    Photo,
  },
  data() {
    return {
      bannerImg:
        "https://static.wixstatic.com/media/74c934_5587dd7db899414d9e432a7d49199c78~mv2.jpg/v1/fill/w_1439,h_603,al_c,q_85,usm_0.66_1.00_0.01/74c934_5587dd7db899414d9e432a7d49199c78~mv2.webp",
      bannerDetail: "สร้างระบบ KYC สำหรับองค์กรของคุณ",
      bannerButton: "ขอคำปรึกษาจากทีมงาน",
      //
      companyTitle: "องค์กรของคุณพร้อมหรือยัง?",
      companyDetaill:
        "การเตรียมพร้อมระบบองค์กรของคุณให้สอดรับกับพ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล ดังที่รัฐบาลได้เสนอให้ผู้ประกอบการไทยเตรียมพร้อม ทำระบบของธุรกิจและบริการของตน บนเครือข่ายอินเตอร์เน็ตให้สอดรับกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล ซึ่งได้ดำเนินการตามหลัการการคุ้มครองข้อมูลส่วนบุคคลมาตรฐานยุโรป หรือ “GDPR” (EU General Data Protection Regulation)โดยเฉพาะในส่วนของขั้นตอนกระบวนการขอคำยินยอม และการยืนยันด้วยลายเซ็นกลายเป็นส่วนสำคัญของ พ.ร.บ. ฉบับนี้",
      companyDetail2:
        "บริษัทของเราได้ศึกษาข้อมูลเชิงเทคนิคและกฎหมาย เพื่อสร้างระบบกระบวนการขอคำยินยอม และการยืนยันด้วยลายเซ็น จนสร้างสรรค์เป็นบริการiSignSecure ที่พร้อมจะผสานกับระบบบริการออนไลน์ของท่านได้ทันที",
      //
      signSecureTitle: "จุดเด่นของระบบ iSignSecure",
      signSecureDetail:
        "ระบบการลงลายเซ็นเพื่อการยินยอมออนไลน์ สะดวก และตรวจสอบได้",
      signSecureContent: [
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
      //
      signSecureDatilLogo:
        "https://static.wixstatic.com/media/74c934_d8b1b749bd8e452288b7a311691e3f8f~mv2.png/v1/crop/x_0,y_16,w_429,h_507/fill/w_53,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo%20mobile%20key-02.webp",
      signSecureDatilDetail:
        "iSignSecure ระบบเซ็นเอกสารดิจิทัลพร้อมผสานเข้ากับทุกธุรกิจในโลกออนไลน์​",
      signSecureDatilContent: [
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
      //
      photo: [
        {
          id: "1",
          url:
            "https://static.wixstatic.com/media/74c934_d97836d6397648bb94720857f83d91af~mv2.png/v1/fill/w_335,h_528,al_c,q_85,usm_0.66_1.00_0.01/1ss.webp",
          color: "#2B3856",
        },
        {
          id: "2",
          url:
            "https://static.wixstatic.com/media/74c934_ad7934fc2a374d6a95f8e49f6243d077~mv2.png/v1/fill/w_302,h_504,al_c,q_85,usm_0.66_1.00_0.01/2ss.webp",
          color: "#616D7E",
        },
        {
          id: "3",
          url:
            "https://static.wixstatic.com/media/74c934_9030360934414db5ac914938282cf7ef~mv2.png/v1/fill/w_282,h_504,al_c,q_85,usm_0.66_1.00_0.01/3ss.webp",
          color: "#BCC6CC",
        },
      ],
      //
    };
  },
};
</script>
<style scoped>
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
