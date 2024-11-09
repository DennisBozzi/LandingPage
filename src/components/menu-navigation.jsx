"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useNavigate } from "react-router-dom"

const components = [
  {
    title: "Trabalho 1",
    href: "/portfolio",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Trabalho 2",
    href: "/portfolio",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Trabalho 3",
    href: "/portfolio",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Trabalho 4",
    href: "/portfolio",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Trabalho 5",
    href: "/portfolio",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Trabalho 6",
    href: "/portfolio",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MenuNavigation({ className }) {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  }

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink onClick={() => goTo('/')} className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Soluções</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem onClick={() => { goTo('/estacaoTotal') }} title="Estacão Total">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem onClick={() => { goTo('/drone') }} title="Drone/Vant">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem onClick={() => { goTo('/scanner') }} title="Scanner">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem onClick={() => { goTo('/laseTracker') }} title="Laser Tracker">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Portfólio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  onClick={() => { goTo(component.href) }}
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"