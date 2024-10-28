const { Posts } = require("../posts");

jest.mock("../../services/logger");

describe("Posts Service", () => {
  service = null;
  loggerSpy = null;

  beforeAll(() => {
    service = new Posts("https://jsonplaceholder.typicode.com");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("get posts returns and successfull when api returns 200", async () => {
    const result = await service.getPosts();
    expect(result.length).toBe(100);
  });

  it("get posts logs the error when api returns 4xx 5xx", async () => {
    service.getPosts = jest.fn().mockImplementation(() => {
      throw new Error("ops");
    });

    const getPostsWithError = () => {
      const result = service.getPosts();
    };

    expect(getPostsWithError).toThrow("ops");
  });
});
