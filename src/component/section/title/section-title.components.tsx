type SectionTitleProps = {
    PageTitle: string;
    classes?: string;
  };
  const SectionTitle = (props: Readonly<SectionTitleProps>) => {
    return (
      <>
        <div className="  border-2 border-solid bg-amber-200 m-5 px-10 text-center text-2xl text-teal-800 font-bold ">
          {props.PageTitle}
        </div>
      </>
    );
  };
  export default SectionTitle