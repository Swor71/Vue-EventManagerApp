<template>
  <div class="">
    <h3 class="text-center">Sign In</h3>
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
          >
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
          >
        </div>
      </div>
      <button class="btn btn-primary d-flex mx-auto">Sign In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>

<style>
</style>
