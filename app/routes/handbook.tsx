import { Seo } from "~/components/ui/seo";

export default function Handbook() {
  return (
    <>
      <Seo
        title="Handbook"
        description="Spis przydatnych komend, które usprawniają poruszanie się po stronie internetowej :)"
        keywords={[
          "handbook",
          "przybornik",
          "komendy",
          "polecenia",
          "nawigacja",
        ]}
      />

      <section className="container prose">
        <h1>Handbook</h1>

        <p>
          Spis przydatnych komend, które usprawnią poruszanie się po stronie 😎
        </p>

        <ul>
          <li>
            <kbd>CTRL</kbd>+<kbd>k</kbd> - Przejście do wyszukiwarki
          </li>
          <li>
            <kbd>CTRL</kbd>+<kbd>j</kbd> - Zmiana motywu
          </li>
          <li>
            <kbd>TAB</kbd> - Sfokusowanie następnego elementu
          </li>
          <li>
            <kbd>SHIFT</kbd>+<kbd>TAB</kbd> - Sfokusowanie poprzedniego elementu
          </li>
          <li>
            <kbd>ALT</kbd>+<kbd>&rarr;</kbd> - Przejście do następnej strony
          </li>
          <li>
            <kbd>ALT</kbd>+<kbd>&larr;</kbd> - Przejście do poprzedniej strony
          </li>
        </ul>
      </section>
    </>
  );
}
