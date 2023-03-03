function toggleList(id) {
    var list = document.getElementById(id);
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
}