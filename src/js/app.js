import dragDrop from "./dnd";

(() => {
  const btn = Array.from(document.querySelectorAll(".btn"));
  btn.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      item.style.display = "none";
      const button = document.createElement("button");
      button.classList.add("btn-item");
      button.textContent = "Добавить задачу";
      item.parentNode.appendChild(button);

      const task = document.createElement("div");
      task.classList.add("content");
      task.innerHTML = `
            <div class="task">
                <textarea placeholder="Здесь можно вписать что-то важное." name="area" id="1" class="input"></textarea>
                <div class="close" id="clos">&#10006;</div>
            </div>`;

      item.parentNode.insertBefore(
        task,
        item.parentNode.children[item.parentNode.children.length - 2],
      );
      workArea(task, item);
    });
  });
  closeTask();
})();

function workArea(evt, item) {
  const btnItem = Array.from(document.querySelectorAll(".btn-item"));
  btnItem.forEach((i) => {
    i.addEventListener("click", () => {
      const txt = evt.querySelector(".input");

      if (txt.value.trim() == "") {
        txt.placeholder = "Ой, а что-то ничего и не записано О_o";
      } else {
        item.nextElementSibling.remove();
        item.style.display = "block";

        const text = document.createElement("div");
        text.classList.add("text");
        text.draggable = "true";

        text.innerHTML = `<div class="text-item">${txt.value}</div>
                    <div class="close-text">&#10006;</div>`;

        item.parentNode.children[1].appendChild(text);
        evt.remove();
        dragDrop();
        closeTask();
      }
    });
  });

  const closeTextarea = document.querySelectorAll(".close");
  closeTextarea.forEach((i) => {
    i.addEventListener("click", () => {
      item.nextElementSibling.remove();
      item.style.display = "block";
      i.parentNode.remove();
    });
  });
}

function closeTask() {
  const closeTask = document.querySelectorAll(".close-text");
  closeTask.forEach((i) => {
    i.addEventListener("click", () => {
      i.parentNode.remove();
    });
  });
}
