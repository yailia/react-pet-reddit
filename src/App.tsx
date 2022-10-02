import React, { useContext, useEffect, useState } from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { postContext, PostContextProvider } from "./shared/context/postContext";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/store";
import './main.global.css'
import thunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./shared/Post";
import { Navigate } from "react-router-dom";
import { NotFound } from "./shared/NotFound";


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


function AppComponent() {

  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);

  return (
    <UserContextProvider>
      {
        mount && (
          <BrowserRouter>
            <Layout>
              <Header />
              <Content>
                <PostContextProvider>
                  <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Navigate to="/posts/" />} />
                    <Route path="/auth*" element={<Navigate to="/posts/" />} />
                    <Route path="/posts" element={<CardsList />} />
                    <Route path="/posts/:id" element={<Post/>} />
                  </Routes>
                </PostContextProvider>
              </Content>
            </Layout>
          </BrowserRouter>
        )
      }
    </UserContextProvider>
  )
}

export const App = hot(() => <Provider store={store}><AppComponent /></Provider>);