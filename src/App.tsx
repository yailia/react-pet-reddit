import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { tokenContext } from "./shared/context/tokenContext";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { UserContextProvider } from "./shared/context/userContext";
import { PostContextProvider } from "./shared/context/postContext";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store";
import './main.global.css'


const store = createStore(rootReducer, composeWithDevTools());


function AppComponent() {
  const [token] = useToken();

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);