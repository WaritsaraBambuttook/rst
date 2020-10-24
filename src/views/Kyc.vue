<template>
  <div>
    <div class="row">
      <div class="col-12">
        <kycBanner
          :bannerImg="bannerImg"
          :title="bannerTitle"
          :detail="bannerDetail"
          :detail2="bannerDetail2"
          :detail3="bannerDetail3"
          :fontTile="bannerFontTitle"
          :fontDetail="bannerFontDetail"
        />
      </div>
      <div class="col-12 ">
        <templateSignSecure
          class="templateSignSecure"
          :title="signSecureTitle"
          :content="signSecureContent"
        />
      </div>
    </div>
  </div>
</template>
<script>
import kycBanner from "../components/kycSystem/Kycbanner";
import templateSignSecure from "../components/home/SignSecure";
export default {
  components: {
    kycBanner,
    templateSignSecure,
  },
  data() {
    return {
      bannerImg:
        "https://static.wixstatic.com/media/74c934_41ada023a4204848ba81b6bb1db1936b~mv2.jpg/v1/fill/w_1405,h_747,al_c,q_85,usm_0.66_1.00_0.01/74c934_41ada023a4204848ba81b6bb1db1936b~mv2.webp",
      bannerTitle: "ระบบ e-KYC สำหรับองค์กร",
      bannerDetail:
        "iSignSecure สามารถผสานเข้ากับเว็บหรือแอปพลิเคชั่นบนมือถือขององค์กรท่านได้ทันที เป็นเสมือนปลั๊กอินที่ทำงานเฉพาะด้านนั่นก็คือ การให้บริการฟังก์ชันสำหรับกระบวนการทำความรู้จักตัวตนของลูกค้า ซึ่งปัจจุบันจะทำอยู่ในรูปแบบของอิเล็กทรอนิกส์ที่เรารู้จักกันในชื่อ e-KYC (การยืนยันตัวตนทางอิเล็กทรอนิกส์) โดยถือเป็นหนึ่งในขั้นตอนสำคัญที่จำเป็นจะต้องกระทำเมื่อลูกค้ามีการทำธุรกรรมกับภาคธุรกิจอาทิ การเซ็นเอกสารยินยอมเพื่อเปิดเผยข้อมูลส่วนบุคคลสำหรับการพัฒนาผลิตภัณฑ์ในอนาคต การยืนยันตัวตนสำหรับการกู้ยืมและทำธุรกรรมต่างๆ กับธนาคาร เป็นต้น",
      bannerDetail2:
        "การยืนยันตัวตนทางอิเล็กทรอนิกส์ (e-KYC หรือ Electronic Know Your Customer) ถือเป็นการมาแทนที่การทำธุรกรรมแบบเดิมในรูปแบบกระดาษที่ ยุ่งยากในการกรอกข้อมูล ส่งเอกสาร และเสียเวลเดินทางไปแสดงตัวตนด้วยตนเองต่อหน้าเจ้าหน้าที่",
      bannerDetail3:
        "ระบบ iSignSecure ออกแบบมาให้พร้อมกับการผสานเข้ากับระบบเว็บไซต์หรือแอปพลิเคชันบนมือถือของทุกองค์กร เพื่อให้ทางภาคธุรกิจสามารถมีฟังก์ชัน e-KYC ที่สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (Personal Data Protection Act, B.E. 2562 (2019))",
      bannerFontTitle: "55px",
      bannerFontDetail: "20px",
      //
      signSecureTitle: "สิ่งที่องค์กรของคุณได้รับ",
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
    };
  },
};
</script>
<style scoped>
.templateSignSecure {
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>
