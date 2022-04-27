import { ChangeEvent, useCallback, useState } from "react";
import { RadioButtonProps } from "./Checkbox.types";
import { Input, Label, Mark, Wrapper } from "./Checkbox.styles";
import { useIsMounted } from "../../../hooks/useIsMounted";

export const Checkbox: React.FC<RadioButtonProps> = ({ children, className, onChange, ...props }) => {
  const isMounted = useIsMounted();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange && onChange(e);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Label className={className}>
      <Wrapper>
        <Input checked={isChecked} onChange={handleChecked} {...props} />
        <Mark>          
        </Mark>
      </Wrapper>
    </Label>
  );
};
