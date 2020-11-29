<template>
  <div class="home"></div>
  <EventCard />
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "Home",
  components: {
    EventCard
  }
};
</script>
