import { component$ } from "@builder.io/qwik";
import SearchForm from "~/components/search-form/search-form";

export default component$(() => {
  return (
    <section>
      <header>
        <h2>Research</h2>
      </header>
      <SearchForm />
    </section>
  );
});
