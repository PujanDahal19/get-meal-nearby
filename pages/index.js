import Card from "@/components/Card";
import HomePage from "@/components/HomePage";
import RestroInfo from "@/components/RestroInfo";
import useLocation from "@/hooks/getLocation";
import fetchResData from "@/pages/api/fetchResData";

export async function getStaticProps() {
  const resData = await fetchResData();
  return {
    props: {
      resData,
    },
  };
}

export default function Home({ resData }) {
  return (
    <div className="flex flex-col justify-between min-h-full max-w-full">
      <HomePage />

      <RestroInfo resData={resData} />
    </div>
  );
}
