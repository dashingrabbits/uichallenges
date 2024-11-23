// src/components/Search/Search.tsx
import React, { useState, useRef, useEffect } from "react";
import TextInput from "../TextInput";
import {
  SearchContainer,
  SearchWrapper,
  IconButton,
  StyledSearchIcon,
} from "./styles/Search.styles";
import { SearchProps } from "./types/Search.types";

const Search: React.FC<SearchProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <SearchContainer>
      <SearchWrapper ref={wrapperRef} isOpen={isOpen}>
        <div className="search-input-container">
          <TextInput
            ref={inputRef}
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={placeholder}
            id="search-input"
          />
        </div>
        <IconButton
          onClick={handleSearchClick}
          type="button"
          aria-label={isOpen ? "Close search" : "Open search"}
        >
          <StyledSearchIcon />
        </IconButton>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
