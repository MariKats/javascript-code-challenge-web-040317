$(document).ready(function(){
  $("#note-form").on('submit', function(e){
    e.preventDefault()
    const text = $('#text').val()
    const author = $('#author').val()
    const list = new CommentList()
    list.addComment(text, author)

    if (text === "" || author === "") {
      alert("Both inputs are needed.")
    } else {
    $('#comment-list').append(list.render())
    }
  })

  $('#delete').on('click', function(e) {
    e.preventDefault()
    $("li.comment").remove();
  })
})
