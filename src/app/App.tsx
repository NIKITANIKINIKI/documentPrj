import { Provider } from "react-redux";
import { AppRoutes } from "./routes";
import { store } from "./providers/store";
import { Toaster } from "react-hot-toast";
import "./index.css";

export const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
        <Toaster position="top-right" toastOptions={{
              style: {
                background: '#000',
                color: '#FFF',
              },
            }} />
      </Provider>
    </>
  );
};
