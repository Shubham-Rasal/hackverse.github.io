const sectionButtons = document.querySelectorAll(".section-button");
const sections = document.querySelectorAll(".section");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
let activeScheduleIndex = 0;

const scheduleData = [
  {
    title: "Genral Announcements",
    description: [
      {
        time: "2nd April",
        description: "Registration Ends",
      },
      {
        time: "15th April",
        description: "Hackathon Starts",
      },
      {
        time: "16th April",
        description: "Hackathon Ends",
      },
    ],
  },
  {
    title: "Day-1",
    description: [
      {
        time: "TBA",
        description: "TBA",
      },
      {
        time: "TBA",
        description: "TBA",
      },
      {
        time: "TBA",
        description: "TBA",
      }
    ],
  },
  {
    title: "Day-2",
    description: [
      {
        time: "TBA",
        description: "TBA",
      },
      {
        time: "TBA",
        description: "TBA",
      },
      {
        time: "TBA",
        description: "TBA",
      }
    ],
  },
];

// const scheduleData = [
//   {
//     title: "Genral Announcements",
//     description: [
//       {
//         time: "2nd April",
//         description: "Registration Ends",
//       },
//       {
//         time: "15th April",
//         description: "Hackathon Starts",
//       },
//       {
//         time: "16th April",
//         description: "Hackathon Ends",
//       },
//     ],
//   },
//   {
//     title: "Day-1",
//     description: [
//       {
//         time: "TBA",
//         description: "Opening Ceremony",
//       },
//       {
//         time: "TBA",
//         description: "Opening Announcements",
//       },
//       {
//         time: "TBA",
//         description: "Participants Check-In",
//       },
//       {
//         time: "TBA",
//         description: "Lunch",
//       },
//       {
//         time: "TBA",
//         description: "Coding Begins",
//       },
//       {
//         time: "TBA",
//         description: "Networking Session",
//       },
//       {
//         time: "TBA",
//         description: "Midnight Evaluation",
//       },
//     ],
//   },
//   {
//     title: "Day-2",
//     description: [
//       {
//         time: "TBA",
//         description: "Midnight Evaluation",
//       },
//       {
//         time: "TBA",
//         description: "Coding Ends, Judging Begins",
//       },
//       {
//         time: "TBA",
//         description: "Live Exhibition",
//       },
//       {
//         time: "TBA",
//         description: "Announcement of Top 10 Teams",
//       },
//       {
//         time: "TBA",
//         description: "Closing Ceremony",
//       },
//     ],
//   },
// ];

const setSchedule = (idx) => {
  if (idx < 0 || idx >= scheduleData.length) return;

  document
    .getElementById("day-item-" + activeScheduleIndex)
    .classList.remove("active");

  activeScheduleIndex = idx;


  let elem = document.querySelector("body");
  let rect = elem.getBoundingClientRect("schedule-section");
  if(rect.top < -3000)
  {
    document
      .getElementById("day-item-" + idx)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }

  document.getElementById("day-item-" + idx).classList.add("active");

  document.getElementById("left-button").disabled = idx == 0;
  document.getElementById("right-button").disabled =
    idx == scheduleData.length - 1;

  const container = document.createElement("div");
  container.id = "schedule";
  const day = scheduleData[idx];

  const items = document.createElement("div");
  items.classList.add("schedule-items");

  for (let j = 0; j < day.description.length; j++) {
    const item = document.createElement("div");
    item.id = `schedule-item-${idx + 1}-${j + 1}`;
    item.classList.add("schedule-item");
    item.setAttribute("data-section", idx + 1);

    const time = document.createElement("span");
    time.classList.add("schedule-item-time");
    time.textContent = day.description[j].time;
    item.appendChild(time);

    const desc = document.createElement("h3");
    desc.classList.add("schedule-item-desc");
    desc.textContent = day.description[j].description;
    item.appendChild(desc);

    items.appendChild(item);
  }

  container.appendChild(items);

  // Append the container to the document body
  document.getElementById("schedule-body").innerHTML = "";
  document.getElementById("schedule-body").appendChild(container);
};

setSchedule(0);