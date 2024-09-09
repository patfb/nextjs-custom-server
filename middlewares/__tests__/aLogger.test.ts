import { describe, expect, it } from "@jest/globals";
import { aLogger } from "../aLogger";
import { type NextRequest } from "next/server";

describe("aLogger", () => {
  const req = {
    nextUrl: {
      pathname: "/apples",
    },
  } as NextRequest;

  it("should return undefined", () => {
    expect(aLogger(req)).toBeUndefined();
  });

  it("should break the lint because there is no expect", () => {});
});
