import { exercice1 } from "@/components/use-algo";

describe("alphabet", () => {
  it("should return alphabet", () => {
    // given
    // when
    const result = exercice1();
    // then
    expect(result).toBe("abcdefghijklmnopqrstuvwxyz");
  });
});
