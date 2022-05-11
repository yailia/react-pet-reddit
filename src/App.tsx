import React, { useEffect } from "react";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostContextProvider } from "./shared/context/postContext";
import { composeWithDevTools } from "redux-devtools-extension";
import { getToken, rootReducer } from "./store";
import './main.global.css'


const store = createStore(rootReducer, composeWithDevTools());


function AppComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToken(window.__token__))
  }, [])

  return (
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
  )
}

export const App = hot(() => <Provider store={store}><AppComponent /></Provider>);