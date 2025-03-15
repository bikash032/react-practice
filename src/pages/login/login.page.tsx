import "../../assets/css/main.css";
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
const SectionText = ({children}:{children:any}) => {
  return <>
  <div>
      {children}
    </div></>;
};
const LoginPage = () => {
  return (
    <>
      <div className="felx flex ml-10 mt-10 border-2 size-full justify-center">
        <div className="border-2  border-solid m-5 bg-violet-950 text-white p-5 ">
          <SectionTitle PageTitle="Welcome Back!!!"></SectionTitle>
      <SectionText>    
        <p className="text-justify text-yellow-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quo
          ducimus doloremque aspernatur odio ex blanditiis sapiente deleniti nam
          et voluptate maxime, nulla, hic reiciendis magni porro. Accusamus,
          illo voluptate!
        </p>
        <p className="text-black border-1 border-solid p-5 bg-amber-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa velit, asperiores expedita beatae dolore laudantium mollitia delectus esse cum. Delectus fugiat nobis quidem neque odit omnis maiores unde facere?</p>
      </SectionText>
        </div>
        <SectionTitle PageTitle="Login" classes="text-red-500" />
      </div>
    </>
  );
};
export default LoginPage;

{
  /* <div className=" felx flex m-96 border-2 size-full dark:bg-gray-950">
  <div className="flex-1 bg-teal-200">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel labore
    explicabo, corrupti totam accusantium iste ut voluptate ad, molestias
    facilis sequi, quis dignissimos placeat quisquam tempora laborum ullam!
    Commodi.
  </div>
  <div>
    <div className="flex items-center justify-center bg-blend-color py-5">
      <h1 className="text-center text-2xl text-teal-800 font-bold mb-10 ">
        LOGIN
      </h1>
    </div>
  </div>
</div>; */
}
