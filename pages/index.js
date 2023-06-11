import Footer from '@/components/footer'
import Header from '@/components/header'
import axios from 'axios'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ country }) {
  return (
    <main>
      <Header country={country} />
      <Footer country={country} />
    </main>
  )
}

export async function getServerSideProps() {
  // let data = await axios
  //   .get(`https://api.ipregistry.co/?key=${process.env.IPREGISTRY_API_KEY}`)
  //   .then((res) => {
  //     let result = res.data.location.country;
  //     result["currency"] = res.data.currency.code;
  //     return result;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo, currency: data.currency },
      country: {
        name: "India",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/in.svg",
        currency: "INR",
      },
    },
  };
}