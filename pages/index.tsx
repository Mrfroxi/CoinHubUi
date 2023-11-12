import MainHeader from "@/src/features/mainHeader/mainHeader";
import StarsCanvas from "@/src/features/starBackground/starBackgrround";
import MainSection from "@/src/shared/components/mainSection/mainSection";


export default function Home() {
  return (
    <main
      className={`min-h-screen bg-mainBackGround`}
    >
     
      <MainHeader />

      <MainSection />

      <StarsCanvas /> 
    </main>
  )
}
