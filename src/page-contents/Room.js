import { useState } from "react";
import styled from "styled-components";

import CustomInputNumber from "../components/CustomInputNumber";

const Room = ({ maxPeople, remainedGuest, assignGuest }) => {
  const [adultQuantity, setAdultQuantity] = useState(1);
  const [childQuantity, setChildQuantity] = useState(0);

  const onAdultNumberClick = (event) => {
    const type = event.target.name;

    if (type === "minus" && adultQuantity > 0) {
      setAdultQuantity(adultQuantity - 1);
    }

    if (type === "plus") {
      setAdultQuantity(adultQuantity + 1);
    }

    assignGuest(event);
  };

  const onChildNumberClick = (event) => {
    const type = event.target.name;

    if (type === "minus" && childQuantity > 0) {
      setChildQuantity(childQuantity - 1);
    }

    if (type === "plus") {
      setChildQuantity(childQuantity + 1);
    }

    assignGuest(event);
  };

  return (
    <RoomWrapper>
      <Title>
        房間：1 人 <br />
        上限：{maxPeople} 人
      </Title>
      <PanelWrapper>
        <SubTitleWrapper>
          <SubTitle>大人</SubTitle>
          <Info>年齡20+</Info>
        </SubTitleWrapper>
        <CustomInputNumber
          value={adultQuantity}
          onChange={onAdultNumberClick}
          isDisabled={
            adultQuantity + childQuantity >= maxPeople || remainedGuest <= 0
          }
        />
      </PanelWrapper>
      <PanelWrapper>
        <SubTitle>小孩</SubTitle>
        <CustomInputNumber
          value={childQuantity}
          onChange={onChildNumberClick}
          isDisabled={
            adultQuantity + childQuantity >= maxPeople || remainedGuest <= 0
          }
        />
      </PanelWrapper>
    </RoomWrapper>
  );
};

export default Room;

const RoomWrapper = styled.div`
  margin-bottom: 18px;
  border-bottom: 1px solid #eee;
`;

const PanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const SubTitleWrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(38, 38, 38);
`;

const SubTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: rgb(38, 38, 38);
`;

const Info = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: rgb(140, 140, 140);
`;
