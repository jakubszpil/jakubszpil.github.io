import { useNavigation, type Navigation } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import BusyIndicator from "../busy-indicator";

vi.mock("react-router", async (importOriginal) => {
  const rest = await importOriginal<typeof import("react-router")>();
  return {
    ...rest,
    useNavigation: vi.fn(),
  };
});

describe("<BusyIndicator />", () => {
  let mockedNavigation: Navigation;
  let mockedUseNavigation: MockInstance;

  beforeEach(() => {
    mockedNavigation = {
      formAction: undefined,
      formData: undefined,
      formEncType: undefined,
      formMethod: undefined,
      json: undefined,
      location: undefined,
      state: "idle",
      text: undefined,
    };

    mockedUseNavigation = vi
      .mocked(useNavigation)
      .mockImplementation(() => mockedNavigation);
  });

  afterEach(() => {
    mockedUseNavigation.mockRestore();
  });

  test("should not show spinner when navigation is idle", async () => {
    mockedUseNavigation.mockImplementationOnce(() => ({
      ...mockedNavigation,
      location: undefined,
    }));

    render(<BusyIndicator />);

    await waitFor(() => {
      expect(screen.queryByTestId("spinner")).toBeFalsy();
    });
  });

  test("should show spinner when navigation is pending", async () => {
    mockedUseNavigation.mockImplementationOnce(() => ({
      ...mockedNavigation,
      location: {},
    }));

    render(<BusyIndicator />);

    await waitFor(() => {
      screen.getByTestId("spinner");
    });
  });
});
