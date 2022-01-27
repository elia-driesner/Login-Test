<template>
  <div id="loginCont">
      <input v-model="userMail" placeholder="Enter your email" />
      <input v-model="userPassword" placeholder="Enter your password" />
      <h3>
          Your Name is: {{userMail}}<br/>
          your password is: {{userPassword}}
      </h3>
    </div>
</template>
<script>

export default ({
  data () {
    return {
      userMail: '',
      userPassword: ''
    }
  },
  methods: {
    checkLogin (accounts) {
      for (var i = 0; accounts.lenght(i); i++) {
        if (accounts[i] === this.userMail) {
          console.log('gibt es')
        }
      }
    }
  }
})

// var accounts = {
//   'test.email@test.com': '1234'
// }

</script>
