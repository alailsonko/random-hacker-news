import { FC, useEffect } from "react";
import Accordion from "../../components/Accordion";
import AccordionButton from "../../components/AccordionButton";
import AccordionItem from "../../components/AccordionItem";
import AccordionPanel from "../../components/AccordionPanel";
import { Header, Container, Nav, H2, WrapperNews, Card, Title } from "./styles";
import { Button, Stack, Link } from "@chakra-ui/react";
import { Store } from "./../../store/store";
import { getRandom10News } from "../../store/middlewares/News/news.actions";
import { connect, useDispatch } from "react-redux";

interface Props {
  news: any;
}

const Home: FC<Props> = ({ news }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandom10News());
  }, [getRandom10News]);
  console.log(news);
  if (news.loading) return <div>loading...</div>;
  return (
    <Container>
      <Nav>
        <Header>Random 10 HackerNews</Header>
      </Nav>
      <WrapperNews>
        <Accordion>
          {news.data.map((item: any, index: number) => (
            <AccordionItem itemId={`${item.time}`} key={item.time}>
              <AccordionButton>
                <Card>
                  <H2>
                    #{index + 1} -{" "}
                    {new Date(item.time * 1000).toLocaleDateString("en-US")} -{" "}
                    {new Date(item.time * 1000).toLocaleTimeString("en-US")}
                  </H2>
                </Card>
              </AccordionButton>
              <AccordionPanel>
                <Stack direction="row" justifyContent="center" align="center">
                  <H2>
                    {item.by} - karma score: {item.user.karma}
                  </H2>
                </Stack>
                <Title>title: {item.title}</Title>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  align="center"
                >
                  <H2>score: {item.score}</H2>
                  <Link href={item.url} isExternal>
                    <Button borderRadius="0" colorScheme="teal" variant="solid">
                      see more
                    </Button>
                  </Link>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </WrapperNews>
    </Container>
  );
};

const mapState = (state: Store) => ({
  news: state.news,
});

export default connect(mapState)(Home);
