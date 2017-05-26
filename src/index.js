$(document).ready(function(){
  $("#note-form").on('submit', function(e){
    e.preventDefault()

    const text = $('#text').val()
    const list = new CommentList()
    list.addComment(text)
    $('#comment-list').append(list.render())
  })
})
