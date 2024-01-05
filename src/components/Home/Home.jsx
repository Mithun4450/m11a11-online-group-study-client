import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Resources from "../Resources/Resources";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Resources></Resources>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            
            
        </div>
    );
};

export default Home;