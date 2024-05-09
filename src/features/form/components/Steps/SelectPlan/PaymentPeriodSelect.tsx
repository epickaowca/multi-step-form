import { FC, ChangeEvent } from "react";
import { styled, css } from "styled-components";
import { CustomCheckbox } from "./CustomCheckbox";
import { PaymentPeriod } from "../../../types";

export type PaymentPeriodProps = {
  paymentPeriod: PaymentPeriod;
  setPaymentPeriod: (val: PaymentPeriod) => void;
};

export const PaymentPeriodSelect: FC<PaymentPeriodProps> = ({
  setPaymentPeriod,
  paymentPeriod,
}) => {
  const isYearly = paymentPeriod === "yearly";
  return (
    <PaymentPeriodStyled>
      <p className={!isYearly ? "selected" : ""}>Monthly</p>
      <CustomCheckbox
        isChecked={isYearly}
        onCheck={(val: boolean) => setPaymentPeriod(val ? "yearly" : "monthly")}
      />

      <p className={isYearly ? "selected" : ""}>Yearly</p>
    </PaymentPeriodStyled>
  );
};

const PaymentPeriodStyled = styled.div(({ theme }) => {
  return css`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 25px;
    padding: 20px 15px 20px 15px;
    background-color: ${theme.magnolia};
    border-radius: 5px;
    > p {
      font-weight: bolder;
      color: ${theme.coolGray};
    }

    > p.selected {
      color: ${theme.marineBlue};
    }
  `;
});
