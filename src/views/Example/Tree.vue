<template>
  <div class="tree">
    <div class="input">
      <el-input placeholder="Filter keyword" v-model="filterText"></el-input>
    </div>
    <div class="level">
      <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        :default-expand-all="true"
        :filter-node-method="filterNode"
        ref="tree"
      ></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "Level one 1",
          children: [
            {
              id: 4,
              label: "Level two 1-1",
              children: [
                {
                  id: 9,
                  label: "Level three 1-1-1",
                },
                {
                  id: 10,
                  label: "Level three 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "Level one 2",
          children: [
            {
              id: 5,
              label: "Level two 2-1",
            },
            {
              id: 6,
              label: "Level two 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "Level one 3",
          children: [
            {
              id: 7,
              label: "Level two 3-1",
            },
            {
              id: 8,
              label: "Level two 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
};
</script>

<style lang="scss">
.input {
  padding: 30px;
}
.level {
  padding: 0px 30px;
}
</style>