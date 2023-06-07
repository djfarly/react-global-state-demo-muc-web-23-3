import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ counts, handleAdd, handleSubtract }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {counts.map((countObject) => {
          return (
            <Counter
              key={countObject.id}
              id={countObject.id}
              animalName={countObject.name}
              count={countObject.count}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
            />
          );
        })}
      </List>
    </>
  );
}
