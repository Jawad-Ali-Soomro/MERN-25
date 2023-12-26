import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const signIn = async () => {
    await signInWithPopup(auth, googleProvider).then((result) =>
      console.log(result)
    );
  };

  return (
    <>
      <button onClick={signIn}>Google</button>
    </>
  );
}

export default App;
