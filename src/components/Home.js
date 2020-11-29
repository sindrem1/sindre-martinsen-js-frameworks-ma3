import React from "react";
import Heading from "./Heading";
import HomeContent from "./HomeContent";

function Home() {
    return (
        <>
            <Heading content="Welcome" />
            <HomeContent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus volutpat vitae est non elementum. Vivamus fringilla eros elit. Nulla a turpis mattis,
            hendrerit diam non, vehicula lectus. Cras euismod ligula id turpis ullamcorper tempus.
            Donec commodo lectus ultricies, maximus libero et, vulputate nisi. Vivamus vel tempus nibh.
            Aenean interdum molestie neque, ut suscipit arcu ullamcorper at.

" />
        </>
    )
}

export default Home;