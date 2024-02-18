// toggle class active navbar nav
const navbarNav = document.querySelector(".navbar-nav");
// ketika hmnu di klik
document.querySelector("#hmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik dimana saja biar keluar dari hmenu
const hmnu = document.querySelector("#hmenu");

document.addEventListener("click", function (e) {
  if (!hmnu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function searchTable() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}


// const filter = document.getElementById("filter");
// const items = document.querySelectorAll("table tr");

// filter.addEventListener("input", (e) => filterData(e.target.value));

// function filterData(search) {
//   items.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
//       item.classList.remove("d-none");
//     } else {
//       item.classList.add("d-none");
//     }
//   });
// }