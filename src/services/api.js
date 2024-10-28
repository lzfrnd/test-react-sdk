exports.api = {
  /**
   * add jsdoc promise array of objects....
   */
  async call(url) {
    const result = await fetch(url);
    return result.json();
  },
};
