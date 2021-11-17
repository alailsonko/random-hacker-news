import { FC, useContext } from "react";
import { ContextApi } from "../AccordionItem";
import { Button, Stack } from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

const AccordionButton: FC = ({ children }) => {
  const { isToggled, handleToggle, currentActiveId, itemId } = useContext(ContextApi);
  const handleButton = () => {
    handleToggle();
  };
  return (
    <Button
      borderRadius="0"
      width="100%"
      onClick={handleButton}
      colorScheme="teal"
      variant="outline"
    >
      <Stack direction="row" spacing={4} align="center">
        <span>{children}</span>
        {!isToggled ||  currentActiveId !== itemId ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Stack>
    </Button>
  );
};

export default AccordionButton;
