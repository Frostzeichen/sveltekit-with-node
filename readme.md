# SvelteKit with Node (and a little bit of Postgres and EJS)

This is a Node server I built which serves a webpage that lets you upload data to a Postgres server. The /build folder contains transpiled (compiled?) Svelte components for the frontend.

However, I haven't set this thing up in a way that lets Svelte take in data from Postgres to Express then straight to a transpiled Svelte component yet. I'll probably have to figure that out in the future.

For the requirements I've set for this project, though, it works as planned. The program might not work on just about anyone's machine though.

The server currently has hard-coded database credentials (they're generic so I don't mind sharing) which have to be changed if you want to use them on yours. It also uses EJS for parsing data straight from the DB and on to the frontend.

It's a Frankenstein of a server. I know. I want to nickname this as The Frankenstein Server or something.

## API Instructions
- `GET "/"` brings you to the "create new entry" page.
- `POST "/inputData"` takes in four values:
    - common_name
    - scientific_name
    - simple_description
    - technical_description
    They're all strings btw.
- `GET "/botanical"`brings you to the list of things saved on the Database. Only displays "is_deleted = false".
- `GET "/botanical?delete=<id>` "deletes" an entry by setting "is_deleted = true" on the entry containing the id number.

- Default address is 0.0.0.0:8080.
- Entries are never truly deleted with just this project alone. Run the sweeper program from my other repo which properly deletes items wherein "is_deleted = true" every X ms.