import "./App.css";
import PersonCard from "./components/PersonCard";
import PersonCardClass from "./components/PersonCard.class";

function App() {
    return (
        <div className="App container">
            <div className="row">
                <PersonCard firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"} />
                <PersonCard firstName={"John"} lastName={"Smith"} age={"88"} hairColor={"Brown"} />
                <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"} />
                <PersonCard firstName={"Maria"} lastName={"Smith"} age={"62"} hairColor={"Brown"} />
                <PersonCard firstName={"William"} lastName={"Hendershot"} age={"38"} hairColor={"Brown"} />
            </div>
            <div className="row">
                <PersonCardClass firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"} />
                <PersonCardClass firstName={"John"} lastName={"Smith"} age={"88"} hairColor={"Brown"} />
                <PersonCardClass firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"} />
                <PersonCardClass firstName={"Maria"} lastName={"Smith"} age={"62"} hairColor={"Brown"} />
                <PersonCardClass firstName={"William"} lastName={"Hendershot"} age={"38"} hairColor={"Brown"} />
            </div>
        </div>
    );
}

export default App;