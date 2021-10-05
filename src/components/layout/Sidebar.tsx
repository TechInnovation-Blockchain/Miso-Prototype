const styles: any = {
  sidebar: {
    width: "250px",
    height: "100%",
    backgroundColor: "#f5f5f5",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
    overflow: "hidden",
    paddingTop: "60px",
    transition: "0.5s",
  },
  main: {
    marginLeft: "250px",
    transition: "0.5s",
  },
};

const Sidebar = ({ children }: any) => {
  return (
    <div>
      <div style={styles.sidebar}>
        <h1>test</h1>
      </div>
      <div style={styles.main}>{children}</div>
    </div>
  );
};

export default Sidebar;
