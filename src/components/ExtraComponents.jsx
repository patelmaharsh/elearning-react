export const MessageComponent = (props) => {
  return (
    <>
      {props.messages && (
        <div className="alert alert-success" role="alert">
          {props.messages}
        </div>
      )}{" "}
    </>
  );
};
