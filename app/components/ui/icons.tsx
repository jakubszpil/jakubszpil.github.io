import {
  createElement,
  forwardRef,
  type SVGElementType,
  type ComponentPropsWithoutRef,
} from "react";

type IconNode = [elementName: SVGElementType, attrs: Record<string, string>][];

export interface IconProps
  extends Partial<Omit<ComponentPropsWithoutRef<"svg">, "stroke">> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

const defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none",
  },
} satisfies Record<string, IconProps>;

const createReactComponent = <T extends keyof typeof defaultAttributes>(
  type: T,
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode
) => {
  const props: IconProps = defaultAttributes[type];

  const Component = forwardRef(
    (
      {
        color = "currentColor",
        size = 24,
        stroke = 2,
        title,
        className,
        children,
        ...rest
      }: IconProps,
      ref
    ) =>
      createElement(
        "svg",
        {
          ref,
          ...props,
          width: size,
          height: size,
          className: className,
          ...(type === "filled"
            ? {
                fill: color,
              }
            : {
                strokeWidth: stroke,
                stroke: color,
              }),
          ...rest,
        },
        [
          title && createElement("title", { key: "svg-title" }, title),
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...(Array.isArray(children) ? children : [children]),
        ]
      )
  );
  Component.displayName = `${iconNamePascal}`;
  return Component;
};

export const IconSearch = createReactComponent("outline", "search", "Search", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }],
]);

export const IconBrandLinkedin = createReactComponent(
  "outline",
  "brand-linkedin",
  "BrandLinkedin",
  [
    ["path", { d: "M8 11v5", key: "svg-0" }],
    ["path", { d: "M8 8v.01", key: "svg-1" }],
    ["path", { d: "M12 16v-5", key: "svg-2" }],
    ["path", { d: "M16 16v-3a2 2 0 1 0 -4 0", key: "svg-3" }],
    [
      "path",
      {
        d: "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z",
        key: "svg-4",
      },
    ],
  ]
);

export const IconBrandGithub = createReactComponent(
  "outline",
  "brand-github",
  "BrandGithub",
  [
    [
      "path",
      {
        d: "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
        key: "svg-0",
      },
    ],
  ]
);

export const IconLoader = createReactComponent("outline", "loader", "Loader", [
  ["path", { d: "M12 6l0 -3", key: "svg-0" }],
  ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }],
  ["path", { d: "M18 12l3 0", key: "svg-2" }],
  ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }],
  ["path", { d: "M12 18l0 3", key: "svg-4" }],
  ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }],
  ["path", { d: "M6 12l-3 0", key: "svg-6" }],
  ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }],
]);

export const IconMenu2 = createReactComponent("outline", "menu-2", "Menu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }],
]);

export const IconX = createReactComponent("outline", "x", "X", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }],
]);

export const IconDeviceDesktop = createReactComponent(
  "outline",
  "device-desktop",
  "DeviceDesktop",
  [
    [
      "path",
      {
        d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z",
        key: "svg-0",
      },
    ],
    ["path", { d: "M7 20h10", key: "svg-1" }],
    ["path", { d: "M9 16v4", key: "svg-2" }],
    ["path", { d: "M15 16v4", key: "svg-3" }],
  ]
);

export const IconMoonStars = createReactComponent(
  "outline",
  "moon-stars",
  "MoonStars",
  [
    [
      "path",
      {
        d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
        key: "svg-0",
      },
    ],
    [
      "path",
      {
        d: "M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",
        key: "svg-1",
      },
    ],
    ["path", { d: "M19 11h2m-1 -1v2", key: "svg-2" }],
  ]
);

export const IconSun = createReactComponent("outline", "sun", "Sun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1",
    },
  ],
]);

export const IconSunMoon = createReactComponent(
  "outline",
  "sun-moon",
  "SunMoon",
  [
    ["path", { d: "M9.173 14.83a4 4 0 1 1 5.657 -5.657", key: "svg-0" }],
    [
      "path",
      {
        d: "M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914",
        key: "svg-1",
      },
    ],
    ["path", { d: "M3 12h1", key: "svg-2" }],
    ["path", { d: "M12 3v1", key: "svg-3" }],
    ["path", { d: "M5.6 5.6l.7 .7", key: "svg-4" }],
    ["path", { d: "M3 21l18 -18", key: "svg-5" }],
  ]
);

export const Icons = {
  ["search"]: IconSearch,
  ["brand-linkedin"]: IconBrandLinkedin,
  ["brand-github"]: IconBrandGithub,
  ["loader"]: IconLoader,
  ["menu-2"]: IconMenu2,
  ["x"]: IconX,
  ["device-desktop"]: IconDeviceDesktop,
  ["moon-stars"]: IconMoonStars,
  ["sun"]: IconSun,
  ["sun-moon"]: IconSunMoon,
};
