class Comment {
  constructor(text, author) {
    this.text = text
    this.author = author
  }

  render() {
    return `<li class="comment"> ${this.author} - ${this.text} <button type="button" id="delete">Delete</button> </li>`
  }
}
