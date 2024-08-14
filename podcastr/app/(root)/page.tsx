import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <div className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending podcast</h1>
        <Button className="text-white-1 bg-orange-1">Button</Button>
      </div>
    </div>
  );
};

export default Home;
