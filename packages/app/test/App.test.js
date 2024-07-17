import { it, expect } from "vitest";
import { App } from "../src";

it("imports correctly", () => {
  expect(App()).not.toHaveProperty("default");
});
