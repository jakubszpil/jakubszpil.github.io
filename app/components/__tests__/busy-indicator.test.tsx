import { useNavigation, type Navigation } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { BusyIndicator } from "../busy-indicator";

vi.mock("react-router", async (importOriginal) => {
  const rest = await importOriginal<typeof import("react-router")>();
  return {
    ...rest,
    useNavigation: vi.fn(),
  };
});

describe("<BusyIndicator />", () => {
  const mockedUseNavigation = vi.mocked(useNavigation);

  const MOCKED_NAVIGATION: Navigation = {
    formAction: undefined,
    formData: undefined,
    formEncType: undefined,
    formMethod: undefined,
    json: undefined,
    location: undefined,
    state: "idle",
    text: undefined,
  };

  beforeEach(() => {
    mockedUseNavigation.mockImplementation(() => MOCKED_NAVIGATION);
  });

  afterEach(() => {
    mockedUseNavigation.mockRestore();
  });

  test("should not show spinner when navigation is idle", async () => {
    mockedUseNavigation.mockImplementationOnce(() => {
      const navigation = { ...MOCKED_NAVIGATION };
      navigation.location = undefined;
      return navigation;
    });

    render(<BusyIndicator />);

    await waitFor(() => {
      expect(screen.queryByTestId("spinner")).toBeFalsy();
    });
  });

  test("should show spinner when navigation is pending", async () => {
    mockedUseNavigation.mockImplementationOnce(() => {
      return {
        ...MOCKED_NAVIGATION,
        state: "loading",
        location: {
          hash: "xxx",
          key: "123",
          pathname: "/",
          search: "",
          state: {},
        },
      };
    });

    render(<BusyIndicator />);

    await waitFor(() => {
      screen.getByTestId("spinner");
    });
  });
});
