import React, { forwardRef } from "react";
import { TextInputProps } from "./types/TextInput.types";
import { useUniqueId } from "../../utils/hooks/useUniqueId";
import {
  InputContainer,
  StyledInput,
  Label,
  ErrorMessage,
} from "./styles/TextInput.styles";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, id: providedId, value, onChange, ...props }, ref) => {
    const id = useUniqueId("text-input", providedId);
    const [focused, setFocused] = React.useState(false);
    const hasValue = Boolean(value);

    return (
      <InputContainer>
        {label && (
          <Label htmlFor={id} hasValue={hasValue} focused={focused}>
            {label}
          </Label>
        )}
        <StyledInput
          ref={ref}
          id={id}
          value={value}
          onChange={onChange}
          error={!!error}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <ErrorMessage id={`${id}-error`} role="alert">
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
