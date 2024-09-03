import TabButton from "./TabButton";

const HeaderTabs = ({
  reqType,
  setReqType
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TabButton
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType}
      />
      <TabButton
        buttonText="posts"
        reqType={reqType}
        setReqType={setReqType}
      />
      <TabButton
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
      />
    </form>
  );
};

export default HeaderTabs;
