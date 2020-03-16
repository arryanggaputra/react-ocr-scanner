import React from "react";
import { ThemeProvider } from "@chakra-ui/core";

function App(props) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}

export default App;
