import {
  getAppDirectory,
  relative,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { join } from "node:path";
import {
  isRouteErrorResponse as _isRouteErrorResponse,
  type ErrorResponse,
} from "react-router";

function getErrorMessageByStatus(status: number) {
  const messages: Record<number, string> = {
    400: "Błędne żądanie",
    401: "Brak autoryzacji",
    402: "Wymagana płatność",
    403: "Zabronione",
    404: "Nie znaleziono",
    405: "Metoda niedozwolona",
    406: "Nieakceptowalny",
    407: "Wymagana autoryzacja proxy",
    408: "Przekroczono czas oczekiwania",
    409: "Konflikt",
    410: "Usunięto",
    411: "Wymagana długość",
    412: "Warunek wstępny nie spełniony",
    413: "Za duży ładunek",
    414: "URI za długi",
    415: "Nieobsługiwany format",
    416: "Żądany zakres nieosiągalny",
    417: "Oczekiwanie nie powiodło się",
    418: "Jestem czajnikiem (żartowny)",
    421: "Nieprawidłowo skierowane żądanie",
    422: "Nieprzetworzalna encja",
    423: "Zablokowane",
    424: "Niepowodzenie zależności",
    425: "Za wcześnie",
    426: "Wymagana aktualizacja",
    428: "Wymagany warunek wstępny",
    429: "Za dużo żądań",
    431: "Nagłówki żądania zbyt duże",
    451: "Niedostępne z powodów prawnych",
    500: "Błąd wewnętrzny serwera",
    501: "Niezaimplementowano",
    502: "Błędna brama",
    503: "Usługa niedostępna",
    504: "Przekroczono czas bramy",
    505: "Wersja HTTP nieobsługiwana",
    506: "Wariant również negocjuje",
    507: "Niewystarczające miejsce",
    508: "Wykryto pętlę",
    510: "Nie rozszerzone",
    511: "Wymagana autoryzacja sieciowa",
  };

  return messages[status];
}

export function isRouteErrorResponse(error: unknown): error is ErrorResponse {
  if (error instanceof Error) {
    if (error.message.includes("No result found for routeId")) {
      (error as unknown as ErrorResponse).status = 404;
      (error as unknown as ErrorResponse).statusText =
        getErrorMessageByStatus(404);
      return true;
    }
  }

  if (_isRouteErrorResponse(error)) {
    error.statusText = getErrorMessageByStatus(error.status);
    return true;
  }

  return false;
}

export function defineRoutes(
  setup: (helpers: ReturnType<typeof relative>) => RouteConfigEntry[]
) {
  return (relativeModulePath: string) => {
    const path = join(getAppDirectory(), relativeModulePath);
    return setup(relative(path));
  };
}
