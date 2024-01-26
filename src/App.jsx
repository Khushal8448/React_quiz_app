import {
  Loader,
  Error,
  Header,
  Main,
  StartScreen,
  Question,
  NextButton,
  Progress,
  FinishScreen,
  Footer,
  Timer,
} from "./component";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
