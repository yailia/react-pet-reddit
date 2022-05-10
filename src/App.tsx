import React, { useState } from "react";
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
import { commentContext } from "./shared/context/commentContext";

function AppComponent() {
  const [token] = useToken();
  const CommentProvider = commentContext.Provider;
  const [commentValue, setCommentValue] = useState('');

  return (
    <CommentProvider value={{value: commentValue, onChange: setCommentValue}}>
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
    </CommentProvider>
  )
}

export const App = hot(() => <AppComponent />);