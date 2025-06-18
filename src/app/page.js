import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ContactPage from "./contato/page";
import styles from "./page.module.css";
import AboutPage from "./sobre/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Hero/>
        <ProjectsSection/>
        <AboutPage/>
        <ContactPage/>
      </main>
      <Footer/>
    </div>
  );
}
