<template>
  <div>
    <h3>Dashboard</h3>
    <button class="btn btn-danger btn-sm" @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase';
export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  }
};
</script>
