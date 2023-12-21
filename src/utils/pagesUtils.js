import { createUser } from "./userUtils";

export const homeInitialization = (socket, setUser) => {
  if (window.location.hash === "#_=_") {
    window.location.hash = "";
    history.pushState("", document.title, window.location.pathname);
  }
  createUser(setUser);
  socket.connect();
};
