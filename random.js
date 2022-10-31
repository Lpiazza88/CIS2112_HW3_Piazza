function clearTextbox()
{
  document.getElementById('mytextarea').value = "";
}

function addPost()
{
  /*alert("You hit it");*/
  
  var journals = JSON.parse(sessionStorage.getItem("Brainstew"));
  var post=tinymce.get('mytextarea').getContent;
  var title = document.getElementById("title").value;
  var category = document.getElementById("category").value;
  var date = new Date();
  
  journals [journals.length-1].title=title;
  journals [journals.length-1].post=post;
  journals [journals.length-1].category=category;
  journals [journals.length-1].date=date;

  sessionStorage.setItem("Brainstew", JSON.stringify(journals));

  /*var table = document.getElementById("Entries");
  var numRows = table.rows.length;
  var numCols = table.rows[0].cells.length - 1;
  var row;
  var cell;

  var newPost = tinymce.get('mytextarea').getContent();

  var anchor = document.createElement("a");
  anchor.href = "journal.html";
  anchor.setAttribute("onclick", "getPost(this.id)");
  anchor.innerText = newPost;
  anchor.setAttribute("id", newPost);

  row = table.insertRow(numRows);
  cell = row.insertCell(numCols);
  cell.appendChild(anchor);*/

  clearTextbox();
}

function getPost(clickedId)
{
  var post = tinymce.get('mytextarea').getContent();
  sessionStorage.setItem("postNew", post);
}

function setTitle()
{
  var tag = document.getElementById("title").value;
  var title = sessionStorage.getItem("postNew");

  tag.innerHTML = PostName;
}