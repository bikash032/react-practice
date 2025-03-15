import SectionTitle from "../../component/section/title/section-title.components";
import SectionDetail from "../../component/section/detail/section-detail.component";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string | null>(
    "bikashBishokarma@gmail.com"
  ); //
  const [data, setData] = useState<string | undefined | null>();
  const [loading, setLoading] = useState<boolean>(false);
  // email="hello@gmail.com"
  // setEmail("hello2@gmail.com") This syntex bring the infinite loop in the application

  useEffect(() => {
    console.log(
      "This hook is always trigger as if there is either be update/change or any circumstances"
    );
  });

  useEffect(() => {
    console.log("I am triggerd when the components will only mount");
    setTimeout(() => {
      setData(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quo
        ducimus doloremque aspernatur odio ex blanditiis sapiente deleniti
        nam et voluptate maxime, nulla, hic reiciendis magni porro.
        Accusamus, illo voluptate!`);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("I will only triggerd when the loading state is update");
  }, [loading]);

  return (
    <>
      <div className="felx flex ml-10 mt-10 border-2 size-full justify-center">
        <div className="border-2  border-solid m-5 bg-violet-950 text-white p-5 ">
          <SectionTitle PageTitle="Welcome Back!!!"></SectionTitle>
          <SectionDetail>
            <p className="text-justify text-yellow-400">
              {data ? (
                data
              ) : (
                <>
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              )}
            </p>
            <p className="text-black shadow-2xl rounded-2xl shadow-amber-300 border-1 border-solid p-5 bg-amber-200">
              <p className="text-4xl text-red-600">{email}</p>Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Suscipit ipsa velit,
              asperiores expedita beatae dolore laudantium mollitia delectus
              esse cum. Delectus fugiat nobis quidem neque odit omnis maiores
              unde facere?
            </p>
          </SectionDetail>
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
