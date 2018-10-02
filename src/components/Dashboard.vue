<template>
  <div>
    <div class="d-flex justify-content-between">
      <h3 class="">Dashboard</h3>
      <button class="btn btn-danger" @click="signOut">Sign Out</button>
    </div>
    <hr>
      <AddEvent />
    <hr>
    <div class="col-md-12 col-sm-12 row mx-0">
      <EventItem 
        v-for="(event_item, index) in this.$store.state.events" 
        :event="event_item" 
        :key="index"/>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebase';
import AddEvent from './AddEvent';
import EventItem from './EventItem';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch('setEvents', events);
    });
  }
};
</script>
