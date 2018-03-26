<template>
        <footer>
            <div class="footer">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <p class="white">Trade For All. 交易一切你所想</p>
                    </div>
                    <div class="col-xs-6 col-md-4 col-md-offset-1 col-sm-3">
                      <h2 class="f2 white">About Us</h2>
                      <ul class="list-unstyled simple-list">
                        <li><a href="/about" class="hover-white">關於我們</a></li>
                      </ul>
                    </div>
                    <div class="col-xs-6 col-md-4 col-sm-3">
                      <h2 class="f2 white">Support</h2>
                      <ul class="list-unstyled simple-list">
                        <li><a href="/help" class="hover-white">常見問題</a></li>
                        <li><a href="/law/policy" class="hover-white">隱私權政策</a></li>
                        <li><a href="/law/terms" class="hover-white">使用者條款</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
</template>

<script>
</script>

<style scoped>
.footer{
    padding: 30px 0 10px 0;
    background: #495057;
}
.footer ul a {
    font-size: .8rem;
    text-decoration: none;
    color: #868e96;
}
.copyright{
    padding: 10px 0 0px 0;
    background: #262626;
}
.f2 {
    font-size: .9rem;
}
.white{
    color: #fff;
}
.gray{
    color: #868e96;
}
.hover-white:focus,.hover-white:hover{
    transition: all .1s ease-in;
    color:#fff
}
</style>
