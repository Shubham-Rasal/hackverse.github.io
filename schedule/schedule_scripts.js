let activeScheduleIndex = 0;

setSchedule = (idx) => {
  if (idx < 0 || idx > 2) return;

  document.getElementById("left-button").disabled = idx == 0;
  document.getElementById("right-button").disabled = idx == 2;

  document
    .getElementById("day-item-" + activeScheduleIndex)
    .classList.remove("active");
  document.getElementById("day-item-" + idx).classList.add("active");

  document
    .getElementById("day-item-" + idx)
    .scrollIntoView({ behavior: "smooth", block: "center" });

  activeScheduleIndex = idx;

  const scheduleItems = document.querySelectorAll(".schedule-items");

  scheduleItems.forEach((scheduleItem, index) => {
    scheduleItem.classList.add("hidden");
    if (idx === index) {
      scheduleItem.classList.remove("hidden");
    }
  });
};

setSchedule(1);
