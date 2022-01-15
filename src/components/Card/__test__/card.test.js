import { render, screen } from "@testing-library/react";
import Card from "../card";

const cardProps = {
    name:"Sydney",
    phone:"111-111-1111",
    email:"laith@gmail.com",
    image:{ url: "https://unsplash.com/photos/83luqSZQgHg", alt: "cute cat image" },
    favorite:false
}

describe("Card", () => {
    test("should show name of cat", () => {
        render(
            <Card
                {...cardProps}
            />
            
        );
        expect(screen.getByText("Sydney")).toBeInTheDocument();
        // expect(screen.getAllByRole("heading", {name: "Sydney"})).toBeInTheDocument()
    });
    test("should show phone number of cat", () => {
        render(
            <Card
                {...cardProps}
            />
            
        );
        expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();

    });
    test("should show email of cat", () => {
        render(
            <Card
                {...cardProps}
            />
            
        );
        expect(screen.getByText(/laith@gmail.com/i)).toBeInTheDocument();

    });

    test("should show image with correct src", () => {
        render(<Card {...cardProps} />);
        expect(screen.getByAltText(/cute cat image/i).src).toBe(cardProps.image.url);
    })
});