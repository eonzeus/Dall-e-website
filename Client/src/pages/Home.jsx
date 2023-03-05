import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75]text-[16px] max-w [500px]">
          Browse through a collection of imaginative creations by DALL-E
        </p>
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Home;
