const { api } = require("./api");
const { logger } = require("./logger");

class Posts {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    try {
      const result = await api.call(`${this.baseUrl}/posts`);
      return result;
    } catch (e) {
      logger.log(e.message());
    }
  }
}

exports.Posts = Posts;
