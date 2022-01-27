<template>
  <div id="registerCont">
    <form @submit.prevent="submit">
      <input type="email" v-model="userMail" placeholder="Enter your email" />
      <input type="password" v-model="userPassword" placeholder="Enter your password" />
      <button type="submit">Register</button>
    </form>
    </div>
</template>
<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default ({
  data () {
    return {
      userMail: '',
      userPassword: '',
      error: false
    }
  },
  methods: {
    async submit () {
      try {
        const user = firebase.auth().createUserWithEmailAndPassword(this.userMail, this.userPassword)
        console.log(user)
      } catch(err) {
        console.log(err)
      }
      )
    }
  }
})

</script>
