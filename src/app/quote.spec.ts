import { Quote } from "./quote";

describe("Quote", () => {
  it("should create an instance", () => {
    expect(
      new Quote(
        1,
        "Watch Finding Nemo",
        "Find an online version and watch merlin find his son",
        new Date(2018, 3, 14)
      )
    ).toBeTruthy();
  });
});
