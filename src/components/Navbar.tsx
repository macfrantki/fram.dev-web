"use client"

import * as React from "react"
import { ModeToggle } from '@/components/ModeToggle'
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

// Define separate types for services
type Service = {
  title: string;
  href: string;
  description: string;
}

// Define separate types for projects
type Project = {
  title: string;
  href: string;
  description: string;
  // In the future, this can be extended with project-specific fields
}

// Define props interface
interface NavbarProps {
  services: Service[];
  projects: Project[];
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function Navbar({ services, projects }: NavbarProps) {
	return (
		<div className="container mx-auto py-4">
			<div className="flex justify-between items-center">
				<div className="font-bold text-2xl">
					<a href="/" className="text-primary">
						Fram.dev
					</a>
				</div>
				
				<div className="flex items-center space-x-2">
					<NavigationMenu>
						<NavigationMenuList>
                            <NavigationMenuItem className="block md:hidden">
                                <NavigationMenuLink>
                                    <a href="/services">
                                        Services
                                    </a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="block md:hidden">
                                <NavigationMenuLink>
                                    <a href="/projects">
                                        Projects
                                    </a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
							<NavigationMenuItem className="hidden md:block">
								<NavigationMenuTrigger>Services</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[320px] gap-3 p-4 md:w-[320px] md:grid-cols-1">
										{services.map((service) => (
											<ListItem
												key={service.title}
												title={service.title}
												href={service.href}
											>
												{service.description}
											</ListItem>
										))}
                                        <ListItem
                                            title="All Services"
                                            href="/services"
                                        >
                                            View all services
                                        </ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							
							<NavigationMenuItem className="hidden md:block">
								<NavigationMenuTrigger>Projects</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[320px] gap-3 p-4 md:w-[320px] md:grid-cols-1">
										{projects.map((project) => (
											<ListItem
												key={project.title}
												title={project.title}
												href={project.href}
											>
												{project.description}
											</ListItem>
										))}
                                        <ListItem
                                            title="All Projects"
                                            href="/projects"
                                        >
                                            View all projects
                                        </ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							
							<NavigationMenuItem className="hidden md:block">
								<NavigationMenuTrigger>About Us</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[320px] gap-3 p-4 md:w-[320px] md:grid-cols-1">
										<ListItem
											title="About"
											href="/about"
										>
											Learn about our mission and values
										</ListItem>
										<ListItem
											title="Team"
											href="/team"
										>
											Meet our talented team members
										</ListItem>
										<ListItem
											title="How We Work"
											href="/how-we-work"
										>
											Discover our workflow and process
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							
						</NavigationMenuList>
						<NavigationMenuViewport />
					</NavigationMenu>
					
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}

