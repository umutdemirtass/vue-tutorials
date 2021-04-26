<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <p>{{text}}</p>
        <p>Filter reverse hali : {{text | reverse}}</p>

        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p>{{text | length}}</p>

        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->
        <p>Computed reverse-mixin : {{reverse}}</p>
        <p>Computed lentgh-mixin : {{length}}</p>

        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->
        
      </div>
    </div>
  </div>
</template>
<script>
import {mixin} from './Mixin';
  export default {
    mixins : [mixin],
    data() {
      return {
        text: "Umut demirtas fenerbahcelidir"
      }
    },
    filters :{
      reverse(value){
        return value.split("").reverse().join("")
      }
    }
  }
</script>
<style>

</style>
