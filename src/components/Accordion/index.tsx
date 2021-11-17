import { Stack } from "@chakra-ui/react";
import { FC, createContext, useState } from "react";

type AccordionType = {
  currentActiveId: string;
  handleCurrentItem: (value: string) => void;
};

export const ContextApiAccordion = createContext<AccordionType>({
  currentActiveId: "",
  handleCurrentItem: (value: string) => null,
});
const Accordion: FC = ({ children }) => {
  const [currentActiveId, setCurrentActiveId] = useState("");

  const initialValue: AccordionType = {
    currentActiveId: currentActiveId,
    handleCurrentItem: (value: string) => {
      setCurrentActiveId(value);
    },
  };
  return (
    <ContextApiAccordion.Provider value={initialValue}>
      <Stack direction="column" spacing={4}>
        {children}
      </Stack>
    </ContextApiAccordion.Provider>
  );
};

export default Accordion;
