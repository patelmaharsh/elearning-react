export const ExtraHeaderComponent = () => {
  return <div className="extra-header-space"></div>;
};
export const ExtraFooterComponent = () => {
  return <div className="extra-footer-space"></div>;
};
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
