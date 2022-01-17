import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Card from "../card";


const cardProps = {
    name:"Sydney",
    phone:"111-111-1111",
    email:"laith@gmail.com",
    image:{ url: "https://unsplash.com/photos/E9kVmtiqqGE", alt: "cute cat image" },
    favorite: false,
    updateFavourite: () => { },
    index:1,
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

    test("should show outlined heart", () => {
        render(<Card {...cardProps} />);

        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    });

    test("should show filled heart", () => {
        render(<Card {...cardProps} favorite={true}/>);
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });

    test("should toggle heart status", () => {
        render(<Card {...cardProps} />);

        userEvents.click(screen.getByRole("button"));

        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

        userEvents.click(screen.getByRole("button"));

        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
        

    })
});