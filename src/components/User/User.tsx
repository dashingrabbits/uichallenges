// src/components/User/User.tsx
import React from "react";
import { UserProps } from "./types/User.types";
import {
  UserContainer,
  AvatarContainer,
  Avatar,
  StatusIndicator,
  UserInfo,
  UserName,
  UserEmail,
} from "./styles/User.styles";

const User: React.FC<UserProps> = ({ user, onClick }) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <UserContainer onClick={onClick}>
      <AvatarContainer>
        <Avatar>{getInitials(user.name)}</Avatar>
        <StatusIndicator status={user.status} />
      </AvatarContainer>
      <UserInfo>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserInfo>
    </UserContainer>
  );
};

export default User;
