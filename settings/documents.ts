import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Overview",
        href: "/overview",
      },
      {
        title: "Features",
        href: "/features",
      },
      {
        title: "Stack & Dependencies",
        href: "/stack-dependencies-prerequisites",
      },
      {
        title: "Installation",
        href: "/installation",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Database",
    href: "/schema",
    items: [
      {
        title: "Schema",
        href: "/schema",
      },
      {
        title: "ORM",
        href: "/swapping-databases-or-orm",
      },
      {
        title: "System",
        href: "/relational-db",
      },
    ],
  },
  {
    title: "Development",
    href: "/development",
    items: [
      {
        title: "Local",
        href: "/local",
      },
      {
        title: "Docker",
        href: "/docker",
      },
      {
        title: "Tooling",
        href: "/tooling",
      },
      {
        title: "Testing",
        href: "/testing",
      },
    ],
  },
  {
    title: "Authentication & Authorization",
    href: "/rbac-authorisation-authentication",
  },
  {
    title: "Deployment",
    href: "/deployment",
  },
  {
    title: "Examples",
    href: "/examples",
  },
  {
    title: "Extending",
    href: "/extending",
  },
  {
    title: "Frontend",
    href: "/front-end-components-and-examples",
  },
  {
    title: "Customization",
    href: "/customisation",
  },
  {
    title: "Troubleshooting",
    href: "/troubleshooting",
  },
  {
    title: "FAQ",
    href: "/frequently-asked-questions",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];
