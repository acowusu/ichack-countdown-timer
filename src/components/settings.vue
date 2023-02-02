<template>
  <div class="hello">
    <el-dialog title="Timer Settings" :visible.sync="show">
      <div class="block">
        <el-timeline>
          <el-timeline-item
            v-for="(task ,index ) in getTasks"
            :key="index"
            :timestamp="task.seconds.toString()"
            placement="top"
          >
            <el-card>
              <!-- <div>    <el-button style="float: right; padding: 3px 0" type="text">X</el-button></div> -->
              <div>
                <h4>{{task.name}}</h4>
              </div>
              <el-button icon="el-icon-delete
" v-on:click="remove(index)" circle></el-button>
            </el-card>
          </el-timeline-item>
        </el-timeline>

        <!-- <el-timeline-item> -->
        <el-card>
          <h4>Add item</h4>
          <el-form>
            <el-form-item>
              <el-input placeholder="Name" v-model="input"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input-number size="mini" v-model="num" :min="1" :max="1000"></el-input-number>
            </el-form-item>
            <el-form-item>
              <el-switch
                style="display: block"
                v-model="mins"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="Seconds"
                inactive-text="Minuites"
              ></el-switch>
            </el-form-item>
            <el-button @click="addItem()" type="success" icon="el-icon-plus" circle></el-button>
          </el-form>
        </el-card>
        <!-- </el-timeline-item> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      mins: true,
      input: "",
      num: 30
    };
  },
  methods: {
    remove(index) {
      this.$store.dispatch("removeTask", index);
    },
    addItem() {
      this.$store.dispatch("addTask", {
        name: this.input,
        seconds: this.mins ? this.num * 60 : this.num
      });
    }
  },
  computed: {
    ...mapGetters(["getTasks", "showMenu"]),
    show: {
      // getter
      get: function() {
        return this.showMenu;
      },
      // setter
      set: function(newValue) {
        this.$store.dispatch("showMenu");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
