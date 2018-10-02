<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="event-card">
      <h4 class="card-title">{{event.title}}</h4>
      <p class="card-text">{{event.description}}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Date: {{event.date}}</li>
        <li class="list-group-item">Location: {{event.location}}</li>
        <li class="list-group-item">Host: {{event.email}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event']
};
</script>

<style>
.event-card {
  text-align: center;
  border: 2px solid #2c3e50;
  margin-top: 10px;
  border-radius: 4px;
  padding: 10px;
}
</style>
