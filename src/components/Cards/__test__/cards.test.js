import { render, screen } from "@testing-library/react";
import Cards from "../cards";
import cats from "../../../mocks/cats.json";

describe("Cards", () => {
    test("should render five card components", () => {
        render(<Cards cats={cats} />);
        expect(screen.getAllByTestId("cardComponent").length).toBe(5);
    })
})