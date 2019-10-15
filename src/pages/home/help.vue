<template>
  <div class="setting">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()" />
      <h3 class="goback-title">帮助与支持</h3>
    </div>
    <div class="nav-margin-top">
      <div class="shadow">
        <i></i>
      </div>
      <!-- 菜单循环 -->
      <div class="common-cell-container">
        <div class="common-cell-wrap">
          <div class="left">
            <p>服务协议</p>
          </div>
          <div class="right">
            <i></i>
          </div>
        </div>
      </div>

      <div class="common-cell-container">
        <div class="common-cell-wrap" @click="jumpLanguage()">
          <div class="left">
            <p>隐私政策</p>
          </div>
          <div class="right">
            <i></i>
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
      checked: true
    };
  },
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  components: {}
};
</script>
<style type="text/css">
</style>
