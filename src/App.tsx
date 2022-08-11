import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostContextProvider } from "./shared/context/postContext";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/store";
import './main.global.css'
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


function AppComponent() {


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