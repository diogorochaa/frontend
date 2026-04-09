import { render } from "@testing-library/react";
import { Card } from "./card";
import renderer from "react-test-renderer";

it("text", () => {
  const { getByText } = render(<Card title="Card" />);
  expect(getByText("Card")).toBeTruthy();
});

it("renders correctly", () => {
  const tree = renderer.create(<Card title="Card" />).toJSON();
  expect(tree).toMatchSnapshot();
});
