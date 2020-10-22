<template>
  <div>
    <div>
      <q-toolbar class="text-white shadow-2 toolbar">
        <q-img
          class="logo q-mt-sm q-mb-sm"
          src="https://static.wixstatic.com/media/74c934_d8b1b749bd8e452288b7a311691e3f8f~mv2.png/v1/crop/x_0,y_16,w_429,h_507/fill/w_53,h_60,al_c,q_85,usm_0.66_1.00_0.01/logo%20mobile%20key-02.webp"
          style="height: 60px; max-width: 53px"
        />
        <!-- <q-btn flat label="Homepage"  /> -->
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="tab" shrink stretch class="tabbar">
          <q-tab name="tab1" label="หน้าแรก" />
          <q-tab name="tab2" label="ระบบ e-KYC" />
          <q-tab name="tab3" label="ระบบ e-Signature" />
          <q-tab name="tab4" label="เทคโนโลยีของ iSignSecure" />
          <q-tab name="tab5" label="ติดต่อเรา" />
        </q-tabs>
      </q-toolbar>
    </div>
    <div>
      <q-parallax class="window-height window-width" :speed="0.5">
        <template v-slot:media>
          <img
            src="https://cdn.pixabay.com/photo/2014/09/23/15/03/background-457811_640.png"
          />
        </template>

        <div class="full-height full-width">
          <Home />
        </div>
      </q-parallax>
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

<style lang="css">
.logo {
  margin-left: 25%;
  /* margin-right: 5%; */
}
.tabbar {
  margin-right: 25%;
}
.toolbar {
  background-color: #1d2951;
}
</style>
