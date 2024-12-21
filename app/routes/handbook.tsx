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

      <section className="prose container">
        <h1>Handbook</h1>
        <p>
          Spis przydatnych komend, które usprawnią poruszanie się po stronie 😎
        </p>

        <ul>
          <li>
            <kbd>CTRL</kbd>+<kbd>k</kbd> - Przejście do wyszukiwarki
          </li>
          <li>
            <kbd>TAB</kbd> - Sfokusowanie następnego elementu
          </li>
          <li>
            <kbd>SHIFT</kbd>+<kbd>TAB</kbd> - Sfokusowanie poprzedniego elementu
          </li>
          <li>
            <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>&#62;</kbd> - Przejście do
            następnej strony
          </li>
          <li>
            <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>&#60;</kbd> - Przejście do
            poprzedniej strony
          </li>
          <li>
            <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>H</kbd> - Przejście do listy
            komend
          </li>
        </ul>
      </section>
    </>
  );
}