<template>
  <form>
    <h3 class="text-center">Sign Up</h3>
    <div class="">
      <div class="form-group row justify-content-center">
        <label for="email" class="col-md-2 col-form-label">Email:</label>
        <div class="col-md-6">
          <input 
            id="email"
            type="text" 
            placeholder="Email"
            v-model="email"
            class="form-control"
          />
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="password" class="col-md-2 col-form-label">Password:</label>
        <div class="col-md-6">
          <input 
            id="password"
            type="password" 
            placeholder="Password" 
            v-model="password"
            class="form-control"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary d-flex mx-auto" @click="signUp">Sign Up</button>
    </div>
    <br>
    <div class="text-center">
      <router-link to="/signin">Already have an account? Sign in here.</router-link>
    </div>
    <p class="text-center text-danger">{{error.message}}</p>
  </form>
</template>

<script>
import { firebaseApp } from '../firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  },
  methods: {
    signUp(e) {
      e.preventDefault();
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
