export default function dragDrop(item) {
  const dragZone = document.querySelectorAll(".box-task");
  const dragItem = document.querySelectorAll(".text");

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

  let draggedItem = null;
  let droppedItem = null;

  function handlerStartDrag(event) {
    this.classList.add("dragItem--active");
    draggedItem = this;
    return;
  }

  function handlerEndDrag(event) {
    this.classList.remove("dragItem--active");
    draggedItem = null;
    return;
  }

  function hendlerZoneEnter(event) {
    event.preventDefault();
    this.classList.add("dropZone--active");
    return;
  }

  function hendlerZoneLeave(event) {
    this.classList.remove("dropZone--active");
  }

  function hendlerZoneOver(event) {
    event.preventDefault();
    return;
  }

  function hendlerZoneDrop(event) {
    this.classList.remove("dropZone--active");
    this.appendChild(draggedItem);
    return;
  }
}
dragDrop();
