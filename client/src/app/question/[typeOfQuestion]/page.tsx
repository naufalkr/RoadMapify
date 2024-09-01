import Content from "./content";

const QuestionPage = ({ params }: { params: { typeOfQuestion: string } }) => {
  // fetch quiz from server
  return (
    <>
      <header>
        <nav className="absolute top-0 w-full bg-class-primary flex items-center justify-center py-5">
          <p className="text-lg font-bold text-class-quaternary">
            Quiz {params.typeOfQuestion}
          </p>
        </nav>
      </header>
      <div className="h-screen flex justify-center items-center bg-class-secondary">
        <Content />
      </div>
    </>
  );
};

export default QuestionPage;
