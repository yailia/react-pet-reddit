import React from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { tokenContext } from "./shared/context/tokenContext";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import './main.global.css'
import {  UserContextProvider } from "./shared/context/userContext";
import { PostContextProvider } from "./shared/context/postContext";


function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <PostContextProvider>
              <CardsList />
            </PostContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppComponent />);