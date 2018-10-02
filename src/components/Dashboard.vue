<template>
  <div>
    <div class="d-flex justify-content-between">
      <h3 class="">Dashboard</h3>
      <button class="btn btn-danger" @click="signOut">Sign Out</button>
    </div>
    <hr>
      <AddEvent />
    <hr>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase';
import AddEvent from './AddEvent';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent
  }
};
</script>
