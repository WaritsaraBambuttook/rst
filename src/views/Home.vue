<template>
  <div class="row Home">
    <div class="col-12">
      <HomeBanner />
    </div>
    <div>
      <div class="col-12 q-mt-xl setPosition">
        <company />
      </div>
      <div class="col-12 q-mt-xl">
        <SignSecure />
      </div>
      <div class="col-12 q-mt-xl setPosition">
        <SignSecureDetail />
      </div>
      <div class="col-12 q-mt-xl">
        <Photo />
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
};
</script>
<style scoped>
.setPosition {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
