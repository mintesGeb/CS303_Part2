// "use strict";
let group = {
  getTitle: function () {
    return this.title;
  },
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();
