import {
  Hero,
  Featured,
  Footer,
  Movies,
  TvShows,
} from './sections'
import Nav from './components/Nav'

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <Featured />
    </section>
    <section className="padding">
      <Movies />
    </section>
    <section className="padding">
      <TvShows />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
);


export default App