# Katezipp.com

## Adding/Removing sections
- Markdown files in the [content](./content) folder turn into the various sections of the website. 
- [static.config.js](./static.config.js) reads the content in, line 12 needs to be updated to pull each section
- [src/App.js](./src/App.js) has links to all the sections they look like this: `<Link className="navbar-item" to="#pubs">Publications</Link>` 
- [src/containers/Home.js](./src/App.js) is the actual page, you need to add a section for each with the same `#` from the previous step in the `id` field, as well as changing the `publications` to be the name of the file from `content`.
```
    <section className="section" id="pubs">
      {convert(publications.contents)}
    </section>
```
