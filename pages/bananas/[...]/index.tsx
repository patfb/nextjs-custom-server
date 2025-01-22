export const getServerSideProps = (context) => {
  const { params, req, res, ...rest } = context;

  console.log("context is", rest);
  return { props: { params } };
};

export default function CountryPage(props) {
  console.log("props are", props);

  return (
    <div>
      <h1>country page</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}
