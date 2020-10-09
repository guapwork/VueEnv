<template>
  <div class="SyncDemo">
    <p>{{ count }}</p>
    <el-button @click="handleCount">count++</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleCount() {
      this.count++;
      localStorage.setItem("testCount", this.count);
    },
  },
  computed: {
    handleClear() {
      return this.$store.state.count;
    },
  },
  watch: {
    
    handleClear(val) {
      this.count = val
    },
  },
};
</script>

<style lang="scss">
</style>