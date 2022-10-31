function clearTextbox()
{
  document.getElementById('mytextarea').value = "";
}

function loads(){
  if(sessionStorage.getItem("Brainstew") == null)
  {
    journals = [
      {post:"this is driving me insane.", title:"how is this going?", catagory: "Complaints", date: "01/01/01"},
      {post:"this is STILL driving me insane.", title:"how is this going now?", catagory: "Complaints", date: "02/01/01"},
      {post:"There's no hope for me.", title:"Any better?", catagory: "Complaints", date: "03/01/01"}
    ]
  }
  else
  {
    var journals = JSON.parse(sessionStorage.getItem("Brainstew"));
  }
}
function addPost()
{
  /*alert("You hit it");*/
  var post=tinymce.get('mytextarea').getContent;
  var title = document.getElementById("title").value;
  var category = document.getElementById("category").value;
  var date = new Date();
  
  journals[journals.length]={};

  journals [journals.length-1].title=title;
  journals [journals.length-1].post=post;
  journals [journals.length-1].category=category;
  journals [journals.length-1].date=date;

  sessionStorage.setItem("Brainstew", JSON.stringify(journals));
/*
  var table = document.getElementById("Entries");
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