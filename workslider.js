var MAX = 4;
      var add = 1;
      var rem;
      function next(arg) {
        add = add + arg;
        rem = add - 1;
        if (add == MAX + 1) {
          add = 1;
          rem = MAX;
        }
        switcher(add, rem);
      }
      function prev(arg) {
        rem = add;
        add = add - arg;
        if (add == 0) {
          add = MAX;
        }
        switcher(add, rem);
        console.log("ADD =" + add);
        console.log("REMOVE =" + rem);
      }

      function switcher(add, rem) {
        var x = document.querySelector(`.box${add}`);
        var y = document.querySelector(`.box${rem}`);
        x.classList.add("active");
        y.classList.remove("active");
      }