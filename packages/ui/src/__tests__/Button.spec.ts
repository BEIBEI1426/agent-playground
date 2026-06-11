import { Button, ButtonProps } from "../index";

describe("Button", () => {
  it("renders with label", () => {
    const result = Button({ label: "Click me" });
    expect(result).toEqual({
      type: "button",
      label: "Click me",
      disabled: false,
    });
  });

  it("sets disabled to true when specified", () => {
    const result = Button({ label: "Submit", disabled: true });
    expect(result).toEqual({
      type: "button",
      label: "Submit",
      disabled: true,
    });
  });

  it("defaults disabled to false", () => {
    const result = Button({ label: "Default" });
    expect(result.disabled).toBe(false);
  });
});