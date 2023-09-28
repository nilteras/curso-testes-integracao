import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test - health", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
})

describe("/fibonacci", () => {
  it("should return status 400 when param isNaN", async () => {
    const result = await api.get("/fibonacci?elements=NaN")
    expect(result.status).toBe(400)
  })

  it("should return status 400 when elements param is not present", async () => {
    const result = await api.get("/fibonacci")
    expect(result.status).toBe(400)
  })

  it("should return status 400 when elements param is not valid number", async () => {
    const result = await api.get("/fibonacci?elements=-2")
    expect(result.status).toBe(400)
  })

  it("should return an array and status 200 when param is valid number", async () => {
    const result = await api.get("/fibonacci?elements=10")
    expect(result.status).toBe(200)
    expect(result.body).toHaveLength(10)
    expect(result.body).toEqual([0,1,1,2,3,5,8,13,21,34])

  })

})