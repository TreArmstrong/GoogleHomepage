// const searchButton = document.getElementById('searchinput');
// function 
// if(searchButton){
//   searchButton.addEventListener('click', function(){
//     alert(searchButton.value);
//   })
// }
// function searchinput(){
//   window.location = "https://www.google.com/search?q=" + document.getElementById("searchinput".value)
// }
// Renamed the function to avoid confusion with element ID
function handleSearch() {
  var searchQuery = document.getElementById("searchInput").value;

  // Check if searchQuery is not empty
  if(searchQuery.trim() !== ""){
    window.location = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
  } else {
    // Display an alert if search query is empty
    alert("Please enter a search query");
  }
}


