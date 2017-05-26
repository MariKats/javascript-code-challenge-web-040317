class CommentList {
  constructor(comments) {
    this.comments = []
  }

  render() {
    return `<ul> ${this.comments.map(comment => comment.render()).join("")} </ul>`
  }

  addComment(string) {
    const newComment = new Comment(string)
    this.comments.push(newComment)
  }
}
