import a from "./a";

it("should load fine", () => {
	expect(a).resolves.toEqual(nsObj({ default: "b" }));
});
