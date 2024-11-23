import styled from "styled-components";

const theme = {
  spacing: (multiplier: number) => `${multiplier * 8}px`,
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
    background: {
      default: "#fff",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      disabled: "rgba(0, 0, 0, 0.26)",
    },
  },
  shape: {
    borderRadius: "4px",
  },
  transitions: {
    duration: {
      shorter: "150ms",
      short: "200ms",
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
};

export const InputContainer = styled.div`
  position: relative;
  margin: ${theme.spacing(2)} 0;
  min-width: 200px;
`;

export const Label = styled.label<{ hasValue?: boolean; focused?: boolean }>`
  position: absolute;
  left: ${theme.spacing(1.5)};
  color: ${({ focused }) =>
    focused ? theme.palette.primary.main : theme.palette.text.secondary};
  background-color: ${theme.palette.background.default};
  padding: 0 ${theme.spacing(0.5)};
  font-size: ${({ hasValue, focused }) =>
    hasValue || focused ? "0.75rem" : "1rem"};
  transform: translateY(
    ${({ hasValue, focused }) => (hasValue || focused ? "-24px" : "0")}
  );
  transform-origin: left top;
  transition: all ${theme.transitions.duration.short}
    ${theme.transitions.easing.easeInOut};
  pointer-events: none;
`;

export const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: ${theme.spacing(1.5)};
  font-size: 1rem;
  line-height: 1.4375em;
  background-color: transparent;
  border: 1px solid
    ${({ error }) => (error ? theme.palette.error.main : "rgba(0, 0, 0, 0.23)")};
  border-radius: ${theme.shape.borderRadius};
  color: ${theme.palette.text.primary};
  transition: all ${theme.transitions.duration.shorter}
    ${theme.transitions.easing.easeInOut};

  &:hover {
    border-color: ${({ error }) =>
      error ? theme.palette.error.main : theme.palette.text.primary};
  }

  &:focus {
    outline: none;
    border-color: ${({ error }) =>
      error ? theme.palette.error.main : theme.palette.primary.main};
    border-width: 2px;
    padding: calc(${theme.spacing(1.5)} - 1px);
  }

  &:disabled {
    background-color: ${theme.palette.action.hover};
    color: ${theme.palette.action.disabled};
    cursor: not-allowed;
  }

  &::placeholder {
    color: transparent;
    transition: color ${theme.transitions.duration.shorter};
  }

  &:focus::placeholder {
    color: ${theme.palette.text.secondary};
  }
`;

export const ErrorMessage = styled.span`
  color: ${theme.palette.error.main};
  font-size: 0.75rem;
  margin-top: ${theme.spacing(0.5)};
  margin-left: ${theme.spacing(1.75)};
  display: block;
`;
