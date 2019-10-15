/**
 * 修改语言
 */

<template>
  <!-- v-touch 手势滑动 -->
  <v-touch v-on:swipeleft="swiperleft" class="wrapper">
    <div class="setting">
      <div class="goback-header">
        <van-icon name="arrow-left" class="goback" @click="goBack()" />
        <h3 class="goback-title" v-text="$t(title)"></h3>
      </div>
      <div class="nav-margin-top">
        <div class="shadow">
          <i></i>
        </div>
        <div v-for="(item,index) in locales" :key="index" @click.stop="chose(item)">
          <div class="common-cell-container">
            <div class="common-cell-wrap">
              <span class="left">{{item.label}}</span>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-touch>
</template>

<script>
import { LANGUAGES } from "@/locales/index";
import html2canvas from "html2canvas";
import { findGoodsById } from "@/axios/api";
import { Dialog } from "vant";
import { app } from "../../main";
export default {
  data() {
    return {
      checked: true,
      title: "Language"
    };
  },
  computed: {
    locales() {
      return LANGUAGES;
    }
  },
  created() {},
  mounted() {},
  methods: {
    //手势滑动
    swiperleft: function() {
      this.$router.push({ path: "/home/setting" });
    },
    goBack() {
      this.$router.go(-1);
    },
    chose(item) {
      this.setLocale(item)
        .then(() => {
          this.$dialog.alert({
            message: this.$t("SaveSuccess")
          });
          console.log(item.key);
          app.$i18n.locale = item.key;
        })
        .catch(err => {
          console.log(err);
          this.$toasted.error(this.$t("SaveFailed"));
        });
    },
    //修改语言
    async setLocale(locale) {
      let messages = app.$i18n.messages;
      if (!messages[locale.key]) {
        let filename = LANGUAGES[locale.key];
        const res = await import(`../../locales/${filename}.json`);
        app.$i18n.setLocaleMessage(locale.key, res);
      }
    }
  },
  components: {}
};
</script>
<style type="text/css">
</style>