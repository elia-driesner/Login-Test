<template>
  <div id="loginCont">
    <form @submit.prevent="submit">
      <input type="email" v-model="userMail" placeholder="Enter your email" />
      <input type="password" v-model="userPassword" placeholder="Enter your password" />
      <button type="submit">Login</button>
    </form>
      <h3>
          Your Name is: {{userMail}}<br/>
          your password is: {{userPassword}}
      </h3>
    </div>
</template>
<script>
// import * as firebase from 'firebase/app'
// import 'firebase/auth'

export default ({
  data () {
    return {
      userMail: '',
      userPassword: '',
      error: false
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
    },
    submit () {

    }
  }
})

</script>
