<template>
  <div id="loginCont">
      <input v-model="userMail" placeholder="Enter your email" />
      <input v-model="userPassword" placeholder="Enter your password" />
      <h1>
          Your Name is: {{userMail}} and your password is: {{userPassword}}
      </h1>
    </div>
</template>
<script>

export default ({
  data () {
    return {
      userMail: 'userMail',
      userPassword: 'userPassword'
    }
  }
})
</script>
