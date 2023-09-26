import insertTask from "./insertTask";

export default function dragDrop() {
  const dragZone = document.querySelectorAll(".box-task");
  const dragItem = document.querySelectorAll(".text");
  let draggedItem = null;

  dragItem.forEach((item) => {
    item.addEventListener("dragstart", handlerStartDrag);

    item.addEventListener("dragend", handlerEndDrag);
  });

  dragZone.forEach((zone) => {
    zone.addEventListener("dragenter", hendlerZoneEnter);

    zone.addEventListener("dragover", (evt) => {
      evt.preventDefault();
      const bottomCard = insertTask(zone, evt.clientY);
      const curCard = document.querySelector(".plaseholder");
      if (!bottomCard) {
        zone.appendChild(curCard);
      } else {
        zone.insertBefore(curCard, bottomCard);
      }
    });

    zone.addEventListener("drop", hendlerZoneDrop);
  });

  function handlerStartDrag(evt) {
    this.classList.add("plaseholder");
    draggedItem = this;
  }

  function handlerEndDrag(evt) {
    this.classList.remove("plaseholder");
    draggedItem = null;
  }

  function hendlerZoneEnter(evt) {
    evt.preventDefault();
  }

  function hendlerZoneDrop(evt) {
    this.classList.remove("plaseholder");
  }
}
dragDrop();
