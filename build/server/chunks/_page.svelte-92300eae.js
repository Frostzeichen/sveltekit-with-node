import { c as create_ssr_component, e as escape } from './ssr-7369fb3e.js';

const css = {
  code: "form.svelte-18tjibq{display:grid;grid-template-columns:repeat(2, 1fr);gap:10px}#submit.svelte-18tjibq{grid-row:5;grid-column:1 / 3}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const name = "Crab Sticks";
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-1dz8l6q">Database Program for the Encyclopedia of Philippine Flora</h1> <p>Welcome ${escape(name)}!</p> <a href="/botanical" data-svelte-h="svelte-1c6ghtk">Botanical Database</a> <h2 data-svelte-h="svelte-qwfjtc">Create new entry</h2> <form id="inputForm" action="/inputData" method="POST" class="svelte-18tjibq" data-svelte-h="svelte-62etfa"><label for="commonName">Common Name</label> <input type="text" name="commonName"> <label for="scientificName">Scientific Name</label> <input type="text" name="scientificName"> <label for="simpleDescription">Simple Description</label> <textarea form="inputForm" name="simpleDescription"></textarea> <label for="technicalDescription">Technical Description</label> <textarea form="inputForm" name="technicalDescription"></textarea> <input type="submit" value="Submit" id="submit" class="svelte-18tjibq"> </form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-92300eae.js.map
