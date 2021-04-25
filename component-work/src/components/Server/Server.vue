<template>
  <li class="list-group-item">
    Sunucu #{{ serverData.id }}
    <p>Durumu : <strong>{{ serverData.status }}</strong></p>
  </li>
</template>

<script>
export default {
    // eslint-disable-next-line vue/require-prop-types
    props : ["serverData"]
}
</script>