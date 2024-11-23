// src/components/User/styles/User.styles.ts
import styled from "styled-components";
import { UserStatus } from "../types/User.types";

const statusColors = {
  [UserStatus.AVAILABLE]: "#22c55e",
  [UserStatus.BUSY]: "#ef4444",
  [UserStatus.AWAY]: "#f59e0b",
} as const;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
    cursor: pointer;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-right: 16px;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #8b5cf6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatusIndicator = styled.div<{ status: UserStatus }>`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ status }) => statusColors[status]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const UserName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
`;

export const UserEmail = styled.span`
  font-size: 14px;
  color: #6b7280;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
