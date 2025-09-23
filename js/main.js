const links = [
  {
    label: "Week1 notes",
    url: "../index.html"
  }
];

const list = document.getElementById("linkList");
links.forEach(link => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.textContent = link.label;
  anchor.href = link.url;

  listItem.appendChild(anchor);
  list.appendChild(listItem);
});
