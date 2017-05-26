$(document).ready(function(){
  $("#note-form").on('submit', function(e){
    e.preventDefault()
    const text = $('#text').val()
    const author = $('#author').val()
    const list = new CommentList()
    list.addComment(text, author)

    if (text === "") {
      alert("You can't submit an empty form. Please enter your comment.")
    } else {
    $('#comment-list').append(list.render())
    }
  })
})
