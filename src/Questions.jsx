import SingleQuestion from './SingleQuestion';

const Questions = (data) => {
  return (
    <section>
      <h1>Questions</h1>
      {data.data.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};
export default Questions;
