import { randomFromArray } from "../randomFromArray";
import { describe, it, expect } from "@jest/globals";

describe("randomFromArray", () => {
  it("works", () => {
    expect(randomFromArray(["apples", "bananas", "oranges"])).toBeDefined();
  });
});
