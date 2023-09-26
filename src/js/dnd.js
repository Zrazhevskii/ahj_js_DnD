import insertTask from "./insertTask";

export default function dragDrop() {
  const dragZone = document.querySelectorAll(".box-task");
  const dragItem = document.querySelectorAll(".text");

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
  });

  function handlerStartDrag() {
    this.classList.add("plaseholder");
    this.querySelector(".close-text").classList.add("close");
  }

  function handlerEndDrag() {
    this.classList.remove("plaseholder");
    this.querySelector(".close-text").classList.remove("close");
  }

  function hendlerZoneEnter(evt) {
    evt.preventDefault();
  }
}
dragDrop();
