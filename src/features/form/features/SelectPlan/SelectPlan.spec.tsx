import { SelectPlan } from "./index";
import { render, screen, waitFor } from "@testing-library/react";
import { plans } from "./data";

const defaultProps = {
  register: jest.fn(),
  paymentPeriod: "monthly",
  setPaymentPeriod: jest.fn(),
} as const;

const FormWrapperProps = jest.fn();
jest.mock("../../layouts/FormWrapper", () => ({
  FormWrapper: jest.fn(({ children, ...props }) => {
    FormWrapperProps(props);
    return <>{children}</>;
  }),
}));

const PlanItemProps = jest.fn();
jest.mock("./components/PlanItem", () => ({
  PlanItem: jest.fn(({ children, ...props }) => PlanItemProps(props)),
}));

it("displays FormWrapper", async () => {
  render(<SelectPlan {...defaultProps} />);
  expect(FormWrapperProps).toHaveBeenCalledWith({
    description: "You have the option of monthly or yearly billing.",
    title: "Select your plan",
  });
});

it("displays FormWrapper", async () => {
  render(<SelectPlan {...defaultProps} />);
  for (let plan of plans) {
    expect(PlanItemProps).toHaveBeenCalledWith(
      expect.objectContaining({
        paymentPeriod: "monthly",
        plan,
      })
    );
  }
});
