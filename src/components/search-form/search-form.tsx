import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const searchData = useStore({
    title: "",
    author: "",
    isbn: "",
  });
  return (
    <form>
      <label>
        Title
        <input
          type="text"
          value={searchData.title}
          onInput$={(ev) =>
            (searchData.title = (ev.target as HTMLInputElement).value)
          }
        />
      </label>
      <label>
        Author
        <input
          type="text"
          value={searchData.author}
          onInput$={(ev) =>
            (searchData.author = (ev.target as HTMLInputElement).value)
          }
        />
      </label>
      <label>
        ISBN
        <input
          type="text"
          value={searchData.isbn}
          onInput$={(ev) =>
            (searchData.isbn = (ev.target as HTMLInputElement).value)
          }
        />
      </label>
    </form>
  );
});
