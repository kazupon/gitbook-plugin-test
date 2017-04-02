module.exports = {
  // Map of hooks
  hooks: {
    "page:before": function (page) {
      console.log('page.title', page.title)
      console.log('page.path', page.path)
      console.log('page.rawPath', page.rawPath)
      console.log('page.type', page.type)
      console.log('this.book.isMultilingual', this.book.isMultilingual())
      console.log('this.book.isLanguageBook', this.book.isLanguageBook())
    }
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {}
}
