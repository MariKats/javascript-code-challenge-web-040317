class Comment {
  constructor(text, author) {
    this.text = text
    this.author = author
  }

  render() {
    return `<li> ${this.author} - ${this.text} </li>`
  }
}
