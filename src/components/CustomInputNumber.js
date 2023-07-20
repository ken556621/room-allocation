import styled from "styled-components";

import useLongPress from "../hooks/useLongPress";

const CustomInputNumber = ({
  min,
  max,
  step,
  name,
  value,
  onChange,
  onBlur,
  isDisabled,
}) => {
  const onClickButton = (event) => {
    onChange && onChange(event);
  };

  const longPressProps = useLongPress(onClickButton);

  return (
    <CustomInputNumberWrapper>
      <ControlButton name="minus" onClick={onClickButton} disabled={value <= 0}>
        <span>-</span>
      </ControlButton>
      <CustomInput
        name="quantity"
        min={min}
        max={max}
        step={step}
        type="number"
        value={value}
        onChange={() => {}}
      />
      <ControlButton name="plus" onClick={onClickButton} disabled={isDisabled}>
        <span>+</span>
      </ControlButton>
    </CustomInputNumberWrapper>
  );
};

export default CustomInputNumber;

const CustomInputNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: rgb(30, 159, 210);
  border: 1px solid rgb(30, 159, 210);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 253, 255);
  }

  &:disabled {
    opacity: 0.48;
    cursor: not-allowed;
  }

  span {
    pointer-events: none;
  }
`;

const CustomInput = styled.input`
  text-align: center;
  font-size: 16px;
  color: rgb(89, 89, 89);
  opacity: 1;
  width: 48px;
  height: 48px;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 4px;
`;
