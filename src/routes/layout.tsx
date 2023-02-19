import { component$, Slot } from "@builder.io/qwik";

import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <footer>
        Made with ♡ with Qwik - Cousing of{" "}
        <a href="https://github.com/Balastrong/book-research" target="_blank">
          Book Research
        </a>
      </footer>
    </>
  );
});
