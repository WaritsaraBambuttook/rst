<template>
  <div class="app">
    <div>
      <q-toolbar class="text-white shadow-2 toolbar">
        <q-img
          class="logo "
          src="https://static.wixstatic.com/media/74c934_d8b1b749bd8e452288b7a311691e3f8f~mv2.png/v1/crop/x_0,y_16,w_429,h_507/fill/w_53,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo%20mobile%20key-02.webp"
          style="height: 60px; max-width: 53px"
        />
        <!-- <q-btn flat label="Homepage"  /> -->
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs shrink stretch class="tabbar">
          <q-tab name="tab1" label="หน้าแรก" />
          <q-tab name="tab2" label="ระบบ e-KYC" />
          <q-tab name="tab3" label="ระบบ e-Signature" />
          <q-tab name="tab4" label="เทคโนโลยีของ iSignSecure" />
          <q-tab name="tab5" label="ติดต่อเรา" />
        </q-tabs>
      </q-toolbar>
    </div>

    <div class="q-mt-md ">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "LayoutDefault",
  components: {
    Home,
  },
  data() {
    return {
      leftDrawerOpen: false,
    };
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
}
.tabbar {
  margin-right: 20%;
}
.toolbar {
  background-color: #1d2951;
  height: 100px;
}
</style>
