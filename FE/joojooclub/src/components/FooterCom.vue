<template>
  <footer class="footer row align-items-start justify-content-around mx-0">
    <div class="footerImg col-4 px-5">
      <img class="footerImg" src="@/assets/logo_sample2.png" alt="joojooclub">
    </div>
    <div class="footerCenter d-flex justify-content-around col-6">
      <div class="info1 mx-5">
        <p class="title">Community</p>
        <p><a class="link" href="https://www.notion.so/2-e109b4c80a8d4fddaec3810e9735adb3">NOTION</a></p>
        <p><a class="link" href="https://lab.ssafy.com/s07-bigdata-dist-sub2/S07P22D106">GITLAB</a></p>
      </div>
      <div class="info2">
        <p class="title">Developers</p>
        <p>Samsung SW Academy For Youth</p>
        <p>정종일, 김민정, 박지은, 오도석, 최연지</p>
      </div>
    </div>
    <div class="footerRight col-2">
      <p class="title">Copyright @ 2022 by D106</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterCom',
}
</script>

<style scoped>

  .footerImg {
    width: 11vw;
  }

  .footerCenter {
    text-align: left;
    margin-left: 40px;
  }

  .info2 {
    padding-left: 40px;
  }

  .footer {
    margin: 100px 0px 0px 0px;
    padding-bottom: 50px;
  }

  .title {
    font-weight: bold;
    font-size: larger;
  }

  a { color: rgb(0, 0, 0); }
  a:visited { color: rgb(0, 0, 0); }
  a:hover { color: rgb(0, 0, 0); }
  a:active { color: rgb(0, 0, 0); }
</style>