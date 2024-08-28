import Content from "./content";

const QuestionPage = ({ params }: { params: { typeOfQuestion: string } }) => {
  return (
    <>
      <header>
        <nav className="absolute top-0 w-full bg-class-primary border-b-2 border-[#333] flex items-center justify-center py-5">
          <p className="text-lg font-bold text-class-tertiary">
            Quiz {params.typeOfQuestion}
          </p>
        </nav>
      </header>
      <div className="h-screen flex justify-center items-center bg-class-primary">
        <Content />
      </div>
    </>
  );
};

export default QuestionPage;
