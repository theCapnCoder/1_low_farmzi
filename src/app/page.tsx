import About from "./_containers/about";
import Awards from "./_containers/awards";
import Call from "./_containers/call";
import Clients from "./_containers/clients";
import Footer from "./_containers/footer";
import Header from "./_containers/header";
import Info from "./_containers/info";
import Intro from "./_containers/intro";
import Main from "./_containers/main";
import News from "./_containers/news";
import Service from "./_containers/service";
import Team from "./_containers/team";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Intro />
      <Service />
      <Info />
      <Awards />
      <Call />
      <Clients />
      <Footer />
      <News />
      <Team />
    </div>
  );
}
