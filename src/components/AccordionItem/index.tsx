import { FC, createContext, useState } from "react";
import { Container } from "./styles";

type AccordionType = {
  isToggled: boolean;
  currentActiveId: string;
  handleToggle: () => void;
};

export const ContextApi = createContext<AccordionType>({
  isToggled: false,
  currentActiveId: '',
  handleToggle: () => null,
});

type Props = {
  itemId: string
}

const AccordionItem: FC<Props> = ({ children, itemId }) => {
  const [isToggled, setIstoggled] = useState(false);
  const [currentActiveId, setCurrentActiveId] = useState('');
  const initialValue: AccordionType = {
    isToggled: isToggled,
    currentActiveId: currentActiveId,
    handleToggle: () => {
      setIstoggled(!isToggled);
      setCurrentActiveId(itemId)
    },
  };
  return (
    <ContextApi.Provider value={initialValue}>
      <Container>{children}</Container>
    </ContextApi.Provider>
  );
};

export default AccordionItem;
