import MainLogo from '@/src/shared/svgs/mainLogo/mainLogo'
import axios from 'axios';
import { GetServerSidePropsContext, NextPage } from 'next'
import nookies from "nookies";
import * as Api from '@/api'

const CryptoChartPage: NextPage = () => {
  return (
    <main className='relative'>
      <header className='fixed flex  item-center w-full py-6 border-b-2'>
        <div className='flex flex-row justify-between px-12 w-full'>
          <MainLogo />
          <div>
            avatar
          </div>
        </div>
      </header>
    </main>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = "Bearer " + _token;

  try {
    await Api.auth.getMe();

    return {
      props: {}
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    };
  }
};

export default CryptoChartPage;