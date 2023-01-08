import Header from "./components/header/Header";
import { BasicAcordion } from "./components/plugins/Acrodion";

import { Search } from "./components/plugins/FormControl";

function App() {
    return (
        <div className="">
            <Header />
            <section className="section row py-5">
                <div className="col-3">
                </div>
                <div className="col-3">
                    <BasicAcordion id="1" body={<Search />}/>
                    <BasicAcordion id="2" />
                </div>
                <div className="col-3">
                    <BasicAcordion id="3" />
                    <BasicAcordion id="4" />
                </div>
                <div className="col-3">
                </div>
            </section>
        </div>
    );
}

export default App;