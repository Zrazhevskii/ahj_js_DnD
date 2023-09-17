export default function dragDrop() {
  const dragZone = document.querySelectorAll(".box-task");
  const dragItem = document.querySelectorAll(".text");
  let draggedItem = null;
  let droppedItem = null;

  dragItem.forEach((item) => {
    item.addEventListener("dragstart", handlerStartDrag);
    item.addEventListener("dragend", handlerEndDrag);

    item.addEventListener("dragenter", () => {
      droppedItem = item;
    });
    item.addEventListener("dragenter", () => {
      droppedItem = null;
    });
  });

  dragZone.forEach((zone) => {
    zone.addEventListener("dragenter", hendlerZoneEnter);
    zone.addEventListener("dragleave", hendlerZoneLeave);
    zone.addEventListener("dragover", hendlerZoneOver);
    zone.addEventListener("drop", hendlerZoneDrop);
  });

  function handlerStartDrag() {
    this.classList.add("dragItem--active");
    draggedItem = this;
  }

  function handlerEndDrag() {
    this.classList.remove("dragItem--active");
    draggedItem = null;
  }

  function hendlerZoneEnter(event) {
    event.preventDefault();
    this.classList.add("dropZone--active");
  }

  function hendlerZoneLeave() {
    this.classList.remove("dropZone--active");
  }

  function hendlerZoneOver(event) {
    event.preventDefault();
  }

  function hendlerZoneDrop() {
    this.classList.remove("dropZone--active");
    this.appendChild(draggedItem);
  }
}
dragDrop();
