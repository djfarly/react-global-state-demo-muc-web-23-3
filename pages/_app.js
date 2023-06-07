import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [counts, setCounts] = useState([
    {
      id: 0,
      name: "Cats",
      count: 12,
    },
    {
      id: 1,
      name: "Dogs",
      count: 0,
    },
    {
      id: 2,
      name: "Sheep",
      count: 4,
    },
    {
      id: 3,
      name: "Dragons",
      count: 0,
    },
  ]);

  function handleAdd(id) {
    setCounts(
      counts.map((countObject) => {
        if (countObject.id === id) {
          return { ...countObject, count: countObject.count + 1 };
        }
        return countObject;
      })
    );
  }

  function handleSubtract(id) {
    setCounts(
      counts.map((countObject) => {
        if (countObject.id === id) {
          return { ...countObject, count: Math.max(0, countObject.count - 1) };
        }
        return countObject;
      })
    );
  }

  const countNumbers = counts.map((countObject) => countObject.count);

  // Oldschool but cool
  // let countSum = 0;
  // for (let i = 0; i < countNumbers.length; i++) {
  //   countSum = countSum + countNumbers[i];
  // }

  // let countSum = 0;
  // countNumbers.forEach((countNumber) => countSum += countNumber);

  let countSum = 0;
  for (let countNumber of countNumbers) {
    countSum += countNumber;
  }

  // reduce
  // const countSum = countNumbers.reduce((a, b) => a + b);

  const countAverage = countSum / counts.length;

  const dragonCount = counts.find(
    (countObject) => countObject.name === "Dragons"
  ).count;

  return (
    <>
      <GlobalStyle />
      <Layout countSum={countSum} dragonCount={dragonCount}>
        <Component
          {...pageProps}
          countAverage={countAverage}
          dragonCount={dragonCount}
          countSum={countSum}
          counts={counts}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </Layout>
    </>
  );
}
