import { FC, createContext, useState, useContext } from "react";
import { ContextApiAccordion } from "../Accordion";
import { Container } from "./styles";

type AccordionType = {
  isToggled: boolean;
  currentActiveId: string
  itemId: string
  handleToggle: () => void;
};

export const ContextApi = createContext<AccordionType>({
  isToggled: false,
  currentActiveId: '',
  itemId: '',
  handleToggle: () => null,
});

type Props = {
  itemId: string
}

const AccordionItem: FC<Props> = ({ children, itemId }) => {
  const [isToggled, setIstoggled] = useState(false);
  const { currentActiveId, handleCurrentItem } = useContext(ContextApiAccordion)
  const initialValue: AccordionType = {
    isToggled: isToggled,
    currentActiveId,
    itemId,
    handleToggle: () => {
      handleCurrentItem(itemId)
      setIstoggled(!isToggled);
    },
  };
  return (
    <ContextApi.Provider value={initialValue}>
      <Container>{children}</Container>
    </ContextApi.Provider>
  );
};

export default AccordionItem;
