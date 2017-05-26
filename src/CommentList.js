class CommentList {
  constructor(comments) {
    this.comments = []
  }

  render() {
    return `<ul> ${this.comments.map(comment => comment.render()).join("")} </ul>`
  }

  addComment(string, author) {
    const newComment = new Comment(string, author)
    newComment[author] = string
    this.comments.push(newComment)
  }
}
