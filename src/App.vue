<template>
  <div class="app">
    <q-layout>
      <div class="row">
        <div class="col-12">
          <q-header class="toolbar">
            <div class="row q-pt-md setPosition">
              <div v-if="window.width > 1024" class="col-2 img">
                <q-img
                  class="logo"
                  src="https://static.wixstatic.com/media/74c934_d8b1b749bd8e452288b7a311691e3f8f~mv2.png/v1/crop/x_0,y_16,w_429,h_507/fill/w_53,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo%20mobile%20key-02.webp"
                />
              </div>
              <div v-if="window.width > 601" class="col-10 text-white tab ">
                <q-tabs
                  inline-label
                  outside-arrows
                  mobile-arrows
                  class="text-white "
                >
                  <q-route-tab
                    name="tab1"
                    :to="{ name: 'Home' }"
                    label="หน้าแรก"
                  />
                  <q-route-tab
                    name="tab2"
                    :to="{ name: 'Kyc' }"
                    label="ระบบ e-KYC"
                  />
                  <q-route-tab
                    name="tab3"
                    :to="{ name: 'ESignature' }"
                    label="ระบบ e-Signature"
                  />
                  <q-route-tab
                    name="tab4"
                    :to="{ name: 'ISignSecure' }"
                    label="เทคโนโลยีของ ISignSecure"
                  />
                  <q-route-tab
                    name="tab5"
                    :to="{ name: 'Contact' }"
                    label="ติดต่อเรา"
                  />
                </q-tabs>
              </div>
              <div
                v-if="window.width < 600"
                class="col-12 setPosition text-center"
              >
                <q-btn-dropdown :label="menu">
                  <q-list v-for="list in list" :key="list.id" class="list">
                    <q-item-label header @click="changeMenu(list)">{{
                      list.name
                    }}</q-item-label>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </q-header>
        </div>
        <div class="col-12">
          <div class="pageView">
            <q-page-container>
              <q-page>
                <router-view />
              </q-page>
            </q-page-container>
          </div>
          <div class="col-12 ">
            <q-footer elevated>
              <Footer />
            </q-footer>
          </div>
        </div>
      </div>
    </q-layout>
  </div>
</template>

<script>
import Footer from "./components/Footer";
// import router from "./router/index";
export default {
  name: "LayoutDefault",
  components: {
    Footer,
  },
  data() {
    return {
      leftDrawerOpen: false,
      window: {
        width: 0,
        height: 0,
      },
      menu: "หน้าแรก",
      list: [
        { name: "หน้าแรก", path: "Home" },
        { name: "ระบบ e-KYC", path: "Kyc" },
        { name: "ระบบ e-Signature", path: "ESignature" },
        { name: "เทคโนโลยีของ ISignSecure", path: "ISignSecure" },
        { name: "ติดต่อเรา", path: "Contact" },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    changeMenu(text) {
      this.menu = text.name;
      this.$router.push({ name: text.path });
    },
  },
};
</script>

<style scoped>
.app {
  /* The image used */
  background-image: url("https://img.freepik.com/free-vector/abstract-paper-hexagon-white-background_51543-7.jpg?size=626&ext=jpg");

  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo {
  margin-left: 20%;
  /* margin-right: 5%; */
  width: 30px;
  height: 35px;
}
.tabbar {
  margin-right: 20%;
}
.toolbar {
  background-color: #1d2951;
}
.pageView {
  height: 100%;
  padding-bottom: auto;
}
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
}
.list {
  width: -webkit-fill-available;
}
@media only screen and (max-width: 1023px) {
  .tab {
    width: 100%;
  }
  .setPosition {
    justify-content: center;
    width: auto;
  }
}
</style>
