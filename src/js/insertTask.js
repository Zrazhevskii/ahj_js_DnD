export default function insertTask(zone, mouseY) {
  const notActualElements = zone.querySelectorAll(".text:not(.plasholder)");

  let closestCard = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  notActualElements.forEach((elem) => {
    const { top } = elem.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestCard = elem;
    }
  });

  return closestCard;
}
