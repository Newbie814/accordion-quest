const SingleQuestion = ({ title, info }) => {
  return (
    <article className='question'>
      <h2>{title}</h2>
      <p>{info}</p>
    </article>
  );
};
export default SingleQuestion;
