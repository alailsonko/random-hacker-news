import { FC, useContext } from "react";
import { Container } from "./styles";
import { ContextApi } from "../AccordionItem";
import { Box } from "@chakra-ui/react";

const AccordionPanel: FC = ({ children }) => {
  const { isToggled } = useContext(ContextApi);
  if (!isToggled) return <div></div>;
  return (
    <Box bg="#C94A4A" w="100%" p={4}>
      {children}
    </Box>
  );
};

export default AccordionPanel;
