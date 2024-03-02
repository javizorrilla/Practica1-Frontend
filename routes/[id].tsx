import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { FilmQuotes } from "./../types.ts"


export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, FilmQuotes>) => {
        try {
            const {id} = ctx.params;
            const quote = await axios.get<FilmQuotes>(`https://filmquotes.deno.dev/${id}`);
            if(quote.status !== 200) throw new Error("Quote does not exist!");
            return ctx.render(quote.data);
        } catch(error) {
            throw new Error("An error occured");
        } 
    }
};

export default function Page(props: PageProps) {
    try {
        const quote = props.data;
        return (
            <div>
                <h1 id="mainTitle_dynamicPages">FILM QUOTES</h1>
                <p class="quote_dynamicPages">{quote}</p>
            </div>
        )
    } catch(error) {
        <div>An error occured!</div>
    }
}