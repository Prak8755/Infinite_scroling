import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [card, setCard] = useState([]);
  let [page, setPage] = useState(1);
  const [loading,setLoading]=useState(true);
  console.log(loading);


  async function getCards() {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const result = await data.json();
    setCard([...card,...result]);
    setLoading(false);
  }

  async function handleScroll() {
    // console.log(document.documentElement.scrollHeight);
    // console.log(window.innerHeight);
    // console.log(document.documentElement.scrollTop);

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop+1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true)
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCards();
  }, [page]);



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className="text-center ">Infinite scrolling app</h1>

      <div className="flex flex-wrap items-center justify-center">

     {card.map((data) => (
          <Cards key={data.id} card={data} />
        ))}

      </div>
     {loading && <h1 className="text-center text-4xl text-orange-600">........loading</h1>}
    </>
  );
};

export default Home;
