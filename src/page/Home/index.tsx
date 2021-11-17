import { FC } from "react";
import Accordion from "../../components/Accordion";
import AccordionButton from "../../components/AccordionButton";
import AccordionItem from "../../components/AccordionItem";
import AccordionPanel from "../../components/AccordionPanel";
import { Header, Container, Nav, H2, WrapperNews, Card, Title } from "./styles";
import { Button, Stack } from "@chakra-ui/react";

const Home: FC = () => {
  return (
    <Container>
      <Nav>
        <Header>Random 10 HackerNews</Header>
      </Nav>
      <WrapperNews>
        <Accordion>
          <AccordionItem itemId="1">
            <AccordionButton>
              <Card>
                <H2>#1 - 2021/09/21 - 22:12:45PM</H2>
              </Card>
            </AccordionButton>
            <AccordionPanel>
              <Stack direction="row" justifyContent="center" align="center">
                <H2>validAturhr - karma score: 1234</H2>
              </Stack>
              <Title>
                title: OAuth with Cloudflare workers on a statically generated
                site
              </Title>
              <Stack
                direction="row"
                justifyContent="space-between"
                align="center"
              >
                <H2>score: 123</H2>
                <Button borderRadius="0" colorScheme="teal" variant="solid">
                  see more
                </Button>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem itemId="2">
            <AccordionButton>
              <Card>
                <H2>#2 - 2021/09/21 - 22:12:45PM</H2>
              </Card>
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </WrapperNews>
    </Container>
  );
};

export default Home;
