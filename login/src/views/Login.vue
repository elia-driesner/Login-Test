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
    userCheck (email, password, users) {
      for (var data in users) {
        if (data === email) {
          if (users[data] === password) {
            console.log('ok')
          } else {
            console.log('password stimmt nicht')
          }
        }
      }
    }
  }
})

// var accounts = {
//   'test.email@test.com': '1234'
// }

</script>
