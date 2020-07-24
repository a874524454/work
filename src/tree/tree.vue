<template>
  <div class="tree-menu">
    <div :style="indent" @dbclick="toggleChildren">{{ label }}</div>
    <div v-if="showChildren">
      <tree-menu
        v-for="(node,index) in nodes"
        :nodes="node.nodes"
        :label="node.label"
        :depth="depth + 1"
        :key="index"
      ></tree-menu>
    </div>
  </div>
</template> <script>
export default {
  props: ["label", "nodes", "depth"],
  data() {
    return { showChildren: false };
  },
  name: "tree-menu",
  computed: {
    indent() {
      return { transform: `translate(${this.depth * 50}px)` };
    },
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  },
};
</script>