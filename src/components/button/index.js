const Index = ({ children }) => {
  return (
    <button
      style={{ border: "3px solid #C98769" }}
      className="bg-primary py-2 px-6 md:py-4 md:px-10"
    >
      {children}
    </button>
  );
};

export default Index;
