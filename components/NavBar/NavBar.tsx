"use client";
import { Book, Menu, Sunset, Trees, Bot, TramFront, Users, AlarmSmoke } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import GoGopher from "../GoGopher/Gopher";


const subMenuItemsTwo = [
    {
        title: "Welcome",
    
        link: "/",
        icon: <AlarmSmoke className="size-5 shrink-0" />,
    },
    {
      title: "About Horizon Art",
  
      link: "https://adtran-intern-portal-8wtxpnnw3-matthewchavis8s-projects.vercel.app/teams/HorizonArt",
      icon: <Sunset className="size-5 shrink-0" />,
    },
    {
      title: "Members",
  
      link: "/members",
      icon: <Users className="size-5 shrink-0" />,
    },
    {
      title: "Training",
  
      link: "/training",
      icon: <TramFront className="size-5 shrink-0" />,
    },
  ];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-10">
        <div className="container">
          <div className="h-16" />
        </div>
      </section>
    );
  }

  return (
    <section className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm py-8">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="Horizon.webp"
                className="w-20"
                alt="logo"
              />
              <Link href="home">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">Smoke & Mirrors</span>
                  <span className="">Horizon Art</span>
                </div>
              </Link>

              <NavigationMenu>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem
                      className={cn(
                        "text-muted-foreground",
                        navigationMenuTriggerStyle,
                        buttonVariants({
                          variant: "ghost",
                        })
                      )}
                    >
                      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-80 p-3">
                          {subMenuItemsTwo.map((item, idx) => (
                            <NavigationMenuItem key={idx}>
                              <NavigationMenuLink asChild>
                                <Link
                                  className={cn(
                                    "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                  href={`${item.link}`}
                                >
                                  {item.icon}
                                  <div>
                                    <div className="text-sm font-semibold">
                                      {item.title}
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <GoGopher />
            </div>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="Horizon.webp"
                className="w-28"
                alt="logo"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">Smoke & Mirrors</span>
                <span className="">Horizon Art</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
