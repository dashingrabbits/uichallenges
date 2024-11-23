import styled from "styled-components";
import { Search as SearchIcon } from "lucide-react";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 24px;
  width: ${({ isOpen }) => (isOpen ? "240px" : "40px")};
  height: 40px;
  transition: all 0.3s ease;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 2px 5px rgba(0,0,0,0.1)" : "none"};

  > div:first-child {
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transition: all 0.3s ease;
  }

  .search-input-container {
    margin: 0;

    input {
      border: none;
      padding: 0 40px 0 16px;
      font-size: 16px;
      background: transparent;
      height: 40px;
      box-sizing: border-box;

      &:focus {
        outline: none;
        box-shadow: none;
        border-color: transparent;
      }
    }

    label,
    span[role="alert"] {
      display: none;
    }
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 2;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: #666;
  width: 20px;
  height: 20px;
`;
