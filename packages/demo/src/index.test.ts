import { demo } from "./";

describe("@ORG_HERE/PACKAGE_HERE", () => {
	it("just pass", () => {
		expect(typeof demo).toBe("function");
		expect(1 + 1).toBe(2);
	});
});
