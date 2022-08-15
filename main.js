var app = new Vue({
  el: "#app",
  data: {
    todoList: [],
    item: {},
    currentItem: "",
  },
  methods: {
    addItem() {
      console.log(1);
      if (this.currentItem.length) {
        this.item = {
          task: this.currentItem,
          isDone: false,
        };
        this.todoList.push(this.item);
        this.item = {};
        this.currentItem = "";
      }
      return;
    },
    setDone(id) {
      console.log(2);

      this.todoList[id].isDone = !this.todoList[id].isDone;
    },
    deleteItem(id) {
      console.log(3);

      this.todoList = this.todoList.filter((item, i) => i !== id);
    },
  },
  computed: {
    titleColor() {
      console.log("?");
      if (this.todoList.filter((item) => item.isDone).length === 0)
        return "red";
      if (
        this.todoList.filter((item) => item.isDone).length >=
          this.todoList.filter((item) => !item.isDone).length &&
        this.todoList.filter((item) => item.isDone).length !==
          this.todoList.length
      )
        return "yellow";
      return "green";
    },
  },
});
