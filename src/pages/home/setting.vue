<template>
  <div class="setting">
    <div class="goback-header">
      <van-icon name="arrow-left" class="goback" @click="goBack()" />
      <h3 class="goback-title">设置</h3>
    </div>
    <div class="nav-margin-top">
      <div class="shadow">
        <i></i>
      </div>
      <!-- 菜单循环 -->
      <div class="common-cell-container">
        <div class="common-cell-wrap">
          <div class="left">
            <p>{{$t('PIN')}}</p>
          </div>
          <div class="right">
            <van-switch v-model="checked" />
          </div>
        </div>
      </div>

      <div class="common-cell-container">
        <div class="common-cell-wrap" @click="jumpLanguage()">
          <div class="left">
            <p>{{$t('Language')}}</p>
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
import html2canvas from "html2canvas";
import { findGoodsById } from "../../axios/api";
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
    jumpLanguage() {
      this.$router.push({ path: "/home/language" });
    }
  },

  components: {}
};
</script>
<style type="text/css">
</style>
