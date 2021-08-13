import React from "react";
import { Component } from "react";

import Navigation from "../components/Navigation";
import Head from "../components/Head";
import FMCKLSpinner from "../components/FMCKLSpinner";
import FMCKLLogo from "../svg/FMCKL.svg";
import FMCKLLightbox from "../components/Lightbox";
import FMCKLTankebubbla from "../svg/FMCKL-tankebubbla.svg";

export default class Index extends Component {
  render() {
    return (
      <>
        <Head
          title="FMCKL – a creative agency focusing on food, society, tech and sustainability"
          description="We build stuff and help others build stuff. We are expert generalists, curious, critical thinkers and life long learners. We are conviced that innovation and entrepreneurship can solve the challanges of tomorrow."
        />

        <Navigation />

        <div className="flex flex-row w-full pb-20 fmckl-container sm:pb-32 ">
          <div className="hidden mt-4 mr-20 text-xl font-medium text-right text-gray-800 font-neue-haas-grotesk-display sm:block">
            <FMCKLLogo className="float-right w-20 mb-4" />
            <div className="clear-both">
              Kristofer Lund
              <br />
              <a href="mailto:kristofer@fmckl.se">kristofer@fmckl.se</a>
              <br />
              +46–70–471 04 85
            </div>
          </div>
          <div className="text-4xl font-bold text-red-500 font-neue-haas-grotesk-display sm:text-6xl lg:text-7xl">
            <FMCKLSpinner />
          </div>
        </div>

        <div className="w-full pb-20 fmckl-container sm:pb-32 sm:hidden">
          <div className="text-xl font-medium text-right text-gray-800 font-neue-haas-grotesk-display">
            <FMCKLLogo className="float-right w-20 mb-4" />
            <div className="clear-both">
              Kristofer Lund
              <br />
              <a href="mailto:kristofer@fmckl.se">kristofer@fmckl.se</a>
              <br />
              +46–70–471 04 85
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse w-full pb-20 fmckl-container sm:pb-32">
          <div className="max-w-lg text-xl font-medium leading-normal text-gray-800 sm:text-right font-neue-haas-grotesk-display">
            <div className="w-full text-right">
              <FMCKLTankebubbla className="inline w-20 pb-12 text-red-500" />
            </div>
            FMCKL is a creative agency focusing on{" "}
            <b>food, society, tech and sustainability</b>. We build stuff and
            help others build stuff. We are expert generalists, curious,
            critical thinkers and life long learners. We believe in genuine and
            that details make all the difference. We want to make a positive
            impact, doing things for a reason. We are conviced that{" "}
            <b>innovation and entrepreneurship</b> can solve the challanges of
            tomorrow.
            <br />
            <br />
            We work with entrepreneurs. We are entrepreneurs. We start things up
            and run the daily business, analyze and develop concepts, coach and
            create structures, package it and do the marketing.
          </div>
        </div>

        <div className="w-full pb-20 text-gray-800 fmckl-container sm:pb-32 font-neue-haas-grotesk-display">
          <div className="pb-16 text-5xl font-bold text-red-500 sm:text-6xl lg:text-7xl">
            Current
            <br />–
          </div>
          <div className="max-w-3xl text-lg font-medium leading-normal lg:max-w-4xl ">
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs">
                <img
                  src="/images/commonsstack.png"
                  className="pb-8 w-14 grayscale"
                />
                Commons Stack builds commons-based microeconomies to sustain
                public goods through incentive alignment, continuous funding and
                community governance. Our open-source, interoperable web3
                components will put effective new tools in the hands of
                communities, enabling them to raise funds and make transparent
                decisions.
              </div>

              <div className="max-w-xs">
                <img src="/images/shiro.png" className="w-32 pb-8 grayscale" />
                Shiro is a local first supply chain network on a mission to
                create thriving regenerative food systems. A multi stakeholder
                platform cooperative – open source, owned and managed by all
                active participants from local consumers to regional
                wholesalers.
              </div>

              <div className="max-w-xs">
                <img
                  src="/images/food-shift.png"
                  className="w-20 pb-8 grayscale"
                />
                Food Shift is an open collective nourishing and connecting
                people, projects and organisations in emerging regenerative food
                systems. We believe that cutting down on carbon emissions
                doesn’t cut it. Doing less bad is not enough, we have to start
                making good!
              </div>
              <div className="max-w-xs">
                <img src="/images/ffe.png" className="w-48 pb-8 grayscale" />
                Inbetween Liljeholmen and Gröndal, just outside of central
                Stockholm lies Färgfabriken – one of the most renowned art
                galleries in Sweden. In parallell with the art exhibitions runs
                Färgfabriken Evenemang. We arrange conferences, weddings, night
                clubs, seminars, markets and a lot more at the beautiful
                premises.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-20 text-gray-800 fmckl-container sm:pb-32 font-neue-haas-grotesk-display">
          <div className="pb-16 text-5xl font-bold text-red-500 sm:text-6xl lg:text-7xl">
            Previous
            <br />–
          </div>
          <div className="max-w-3xl text-lg font-medium leading-normal lg:max-w-4xl ">
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs">
                <img src="/images/agfo.png" className="pb-8 w-28 grayscale" />
                AGFO believes that innovation and entrepreneurship can solve the
                food challenges of tomorrow and create sustainability both
                rurally and in the city. AGFO inspires innovation across the
                whole food chain – from farmer to food industry to decision
                makers, investors and consumers.
              </div>

              <div className="max-w-xs">
                <img
                  src="/images/forenadeinkop.png"
                  className="w-40 pb-8 grayscale"
                />
                Förenade Inköp is a project with the goal to facilitate more
                food buyers clubs and local cooperative food stores to start. We
                connect existing cooperatives and communities and support
                cooperative entrepreneurs on their journey.
              </div>

              <div className="max-w-xs">
                <img
                  src="/images/urbanoasis.png"
                  className="pb-8 w-36 grayscale"
                />
                UrbanOasis is a food tech startup based in Stockholm with the
                goal to accelerate the transition towards sustainable food
                production. We are enabling cities to radically reduce their
                carbon footprint, whilst also providing affordable greens packed
                full of nutrients, anti-oxidants and natural flavours all year
                round.
              </div>
              <div className="max-w-xs">
                <img src="/images/bunbun.png" className="pb-8 w-28 grayscale" />
                Bun Bun is a food concept and one of Swedens first and most
                successful food trucks. Vietnamese Bánh Mì, noodles and tacos!
                Bun Bun Appetit!
              </div>
              <div className="max-w-xs">
                <img
                  src="/images/nobelberget.png"
                  className="pb-8 w-44 grayscale"
                />
                Ett stenkast från södermalm ligger Nobelberget – ett mäktigt,
                unikt och enastående komplex. I Akzo Nobels gamla lokaler mellan
                Sickla Köpkvarter och Hammarby Sjöstad har vi flyttat in och
                byggt om gymnastiksalar och konferensrum till Stockholms mest
                unika kultur- och event­arena. En plats för progressiv kultur i
                ett nytt och annorlunda fysiskt rum.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-20 text-gray-800 sm:pb-32 font-neue-haas-grotesk-display bg-gradient-bottom">
          <div className="fmckl-container ">
            <div className="pb-16 text-5xl font-bold text-red-500 sm:text-6xl lg:text-7xl">
              Pics
              <br />–
            </div>
            <div className="max-w-3xl text-lg font-medium leading-normal lg:max-w-4xl ">
              <FMCKLLightbox />
            </div>
          </div>
        </div>
      </>
    );
  }
}
