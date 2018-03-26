<template>
  <div role="tablist">
    <h2>沒有偵測到您的MetaMask</h2>
    <b-card no-body class="mb-1" id="help">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">什麼是MetaMask</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            它是一個以太的數字錢包，作為瀏覽器錢包插件，您可以觀看下面視頻介紹:
          </p>
          <b-embed type="iframe"
           aspect="16by9"
           src="https://www.youtube.com/embed/6Gf_kRE4MJU?rel=0"
           allowfullscreen
          ></b-embed>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">已經安裝了MetaMask，為什麼還是顯示這個頁面呢？</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            一段時間閒置或沒有操作後，為了安全，MetaMask會鎖定您的帳號，只要重新登入解鎖即可。
          </p>
          <img src="/static/assets/MetaMaskLock.png" class="img-fluid"/>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<style>
.container {
  text-align: center;
}
</style>
