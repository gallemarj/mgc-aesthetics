"use client";

import Image from "next/image";

export default function HeroSection({ title, subtitle, image = "/homepic/homepic1.avif" }) {
  return (
    <section className="inner-hero inner-hero--simple">
      <div className="inner-hero__bg">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          className="inner-hero__bg-img"
        />
      </div>
      <div className="inner-hero__overlay" />
      <div className="inner-hero__content container">
        <p className="inner-hero__subtitle">{subtitle}</p>
        <h1 className="inner-hero__title">{title}</h1>
        <span className="inner-hero__accent" />
      </div>
    </section>
  );
}
