import { useState } from "react";
import "./App.css";
import { Layout } from "./components/layout";
import { LandingPage } from "./LandingPage";

function App() {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
}

export default App;
