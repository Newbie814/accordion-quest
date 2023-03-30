import Questions from './Questions';
import questions from './data';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState(questions);
  return (
    <section>
      <h2>Accordion Starter</h2>
      <Questions data={data} />
    </section>
  );
};
export default App;
