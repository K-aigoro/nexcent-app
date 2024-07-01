// eslint-disable-next-line no-unused-vars
import React from "react";
import BlogSection from "./reuseable/BlogSection";
import StatisticSection from "./Small/StatisticSection";
import { icon } from "../data";
import TestimonialSection from "./Small/TestimonialSection";
import InfoSection from "./Small/InfoSection";
import LastSection from "./Small/Lastsection";
function Body() {
  const data1 = {
    name: "The unseen of spending three years at Pixelgrade",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    img: icon.Rafiki,
  };

  const data2 = {
    name: "How to design your site footer like we did",
    title:
      "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
    img: icon.Pana,
  };

  return (
    <>
      <BlogSection name={data1.name} title={data1.title} img={data1.img} />
      <StatisticSection />
      <BlogSection name={data2.name} title={data2.title} img={data2.img} />
      <TestimonialSection />
      <InfoSection />
      <LastSection />
    </>
  );
}

export default Body;
