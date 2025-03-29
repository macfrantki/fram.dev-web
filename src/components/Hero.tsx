import React from "react";
import { ContactForm } from "@/components/ContactForm";

export function Hero() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:items-center">
        <div className="md:col-span-3 space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tighter">
            <span className="block">CODE THAT WORKS</span>
            <span className="block text-primary">DESIGN THAT SELLS</span>
            <span className="block">RESULTS THAT LAST</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Custom-built websites and software solutions that convert visitors into customers. 
            No templates. Just powerful digital experiences that drive business growth.
          </p>
        </div>

        <div className="md:col-span-2 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
