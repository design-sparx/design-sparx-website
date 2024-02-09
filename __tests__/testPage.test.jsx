import "@testing-library/jest-dom";
import Page from "../app/test/page";
import { render, screen } from "../.test-utils";

describe("Page", () => {
	it("renders a heading", () => {
		render(<Page />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});
});
