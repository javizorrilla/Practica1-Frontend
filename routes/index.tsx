import axios from "npm:axios";
import { FilmQuotes } from "./../types.ts";
import Button from "../components/Button.tsx";
import Footer from "../components/Footer.tsx";


export default async function Home() {
  try {
    const quote = await axios.get<FilmQuotes>("https://filmquotes.deno.dev/");

    if (!quote) throw new Error("Can't obtain quotes!");

    return (
      <div id="mainContainer">
        <h1>RANDOM FILM QUOTES</h1>
        <p class="randomQuote">{quote.data}</p>
        <a href="https://trollface.dk/" target="_blank">
          <Button variant="primary" class="trollButton">Random Quote</Button>
        </a>
        <img src="https://avatars.githubusercontent.com/u/55835767?v=4" class="animatedImage"/>
        <Footer />
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
