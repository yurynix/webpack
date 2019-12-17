import a from "./a";
import b from "./b";

it("should load fine", () => {
	expect(a).resolves.toEqual(nsObj({ default: "b" }));
	expect(b).toBe("b");
});
