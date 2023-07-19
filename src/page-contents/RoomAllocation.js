import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

import Room from "./Room";
import roomsMeta from "../fakeData/roomsMeta";

const RoomAllocation = ({}) => {
  const [roomsInfo, setRoomsInfo] = useState([]);
  const [totalGuest, setTotalGuest] = useState(0);
  const [assignedGuest, setAssignedGuest] = useState(0);

  const assignGuest = (event) => {
    const type = event.target.name;

    if (type === "minus") {
      setAssignedGuest(assignedGuest - 1);
    }

    if (type === "plus") {
      const result = assignedGuest + 1;

      setAssignedGuest(assignedGuest + 1);
    }
  };

  const renderRooms = useMemo(() => {
    return roomsInfo.map((room) => (
      <Room
        key={room.id}
        id={room.id}
        maxPeople={room.people}
        assignedGuest={assignedGuest}
        assignGuest={assignGuest}
      />
    ));
  }, [roomsInfo]);

  useEffect(() => {
    // Mock api request behavior
    const roomsData = roomsMeta;

    setRoomsInfo(roomsData);
    setAssignedGuest(roomsData.length);
    setTotalGuest(20); // Default 20 人入住
  }, []);

  return (
    <RoomAllocationWrapper>
      <Title>
        住客人數：{totalGuest} 人 / {roomsInfo.length} 房
      </Title>
      <Notification>尚未分配人數：{assignedGuest} 人</Notification>
      {renderRooms}
    </RoomAllocationWrapper>
  );
};

export default RoomAllocation;

const RoomAllocationWrapper = styled.div`
  margin: auto;
  width: 560px;
  max-height: calc(100% - 128px);
  padding: 50px;
  border-radius: 4px;
`;

const Title = styled.div`
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(38, 38, 38);
`;

const Notification = styled.div`
  margin-bottom: 18px;
  padding: 12px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(140, 140, 140);
  background-color: rgb(240, 253, 255);
  border-radius: 4px;
  border: 1px solid rgb(30, 159, 210);
`;
