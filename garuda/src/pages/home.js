import HeroSection from "../section/hero/hero";
import UpcomingEvents from '../section/upcomingEvents/UpcomingEvents'
import CreateEvent from "../section/createEvent/CreateEvent";
import OurProjects from "../section/project/OurProjects";
import Footer from "../section/footer/Footer";
function Home(params) {
    return (
        <>
            <HeroSection />
            <UpcomingEvents />
            <CreateEvent />
            <OurProjects />
            <Footer />

        </>
    );
}

export default Home;