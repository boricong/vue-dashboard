<template>
  <div class="child">
    <p>-------------------------------------</p>
    <p>This is an dynamic route test page</p>
    <!-- vue router를 plugin으로 추가했기 때문에 vue instance에서는 this.$route변수로 라우터에 접근할 수 있다.
         따라서 this.$route.params.id 를 통해 접근 가능
         쿼리 문자열은 this.$route.query로 확인 가능
      -->
    <p>id : {{ this.$route.params.id }}</p>
    <p>-------------------------------------</p>
  </div>
</template>
