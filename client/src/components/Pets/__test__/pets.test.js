import { render, screen } from "@testing-library/react";
import Pets from "../pets";
import { rest } from "msw";
import { setupServer } from "msw/node";
import catsMock from "../../../mocks/cats.json"

const server = setupServer(
    rest.get("http://localhost:4000/cats", (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json(catsMock)
        )
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Pets", () => {
    test("should render the correct about of cards", async() => {
        render(<Pets />);
        const cards = await screen.findAllByTestId("cardComponent");
        expect(cards.length).toBe(5);
    })
})