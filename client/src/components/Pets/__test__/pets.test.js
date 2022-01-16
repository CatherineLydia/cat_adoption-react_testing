import { render, screen } from "@testing-library/react";
import Pets from "../pets";

describe("Pets", () => {
    test("should render the correct about of cards", async() => {
        render(<Pets />);
        const cards = await screen.findAllByTestId("cardComponent");
        expect(cards.length).toBe(5);
    })
})