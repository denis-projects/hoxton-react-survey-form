import { useState } from "react";
import AnswersList from "./AnswersList";

const initialForm = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
};

function Main() {
    const [open, setOpen] = useState(false); //Ignore this state
    const [formData, setFormData] = useState([]);
    let newForm = JSON.parse(JSON.stringify(initialForm));

    return (
        <main className="main">
            <section className={`main__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList answersList={formData} />
            </section>
            <section className="main__form">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        let bestFeatures = Array.from(e.target.bestFeatures)
                            .filter((input) => input.checked)
                            .map((input) => input.value);
                        let worstFeatures = Array.from(e.target.worstFeatures)
                            .filter((input) => input.checked)
                            .map((input) => input.value);
                        let consistency = Number(
                            Array.from(e.target.consistency)
                                .filter((input) => input.checked)
                                .map((input) => input.value)
                                .join("")
                        );
                        let logo = Number(
                            Array.from(e.target.logo)
                                .filter((input) => input.checked)
                                .map((input) => input.value)
                                .join("")
                        );
                        let color = Number(
                            Array.from(e.target.color)
                                .filter((input) => input.checked)
                                .map((input) => input.value)
                                .join("")
                        );
                        let timeSpent = Array.from(e.target.timeSpent)
                            .filter((input) => input.checked)
                            .map((input) => input.value);

                        setFormData([
                            ...formData,
                            {
                                review: e.target.review.value,
                                email: e.target.email.value,
                                username: e.target.username.value,
                                consistency: consistency,
                                colour: color,
                                logo: logo,
                                bestFeatures: bestFeatures,
                                worstFeatures: worstFeatures,
                                timeSpent: timeSpent,
                            },
                        ]);
                        e.target.reset();
                    }}
                    className="form"
                >
                    <h2>Tell us what you think about your rubber duck!</h2>
                    <div className="form__group">
                        <h3>
                            What would you say that are the best features of your rubber duck?
                        </h3>
                        <ul>
                            <li>
                                <label htmlFor="bf1">
                                    <input
                                        name="bestFeatures"
                                        id="bf1"
                                        type="checkbox"
                                        value="colour"
                                    />
                                    It's yellow!
                                </label>
                            </li>
                            <li>
                                <label htmlFor="bf2">
                                    <input
                                        name="bestFeatures"
                                        id="bf2"
                                        type="checkbox"
                                        value="sound"
                                    />
                                    It squeaks!
                                </label>
                            </li>
                            <li>
                                <label htmlFor="bf3">
                                    <input
                                        name="bestFeatures"
                                        id="bf3"
                                        type="checkbox"
                                        value="logo"
                                    />
                                    It has a logo!
                                </label>
                            </li>
                            <li>
                                <label htmlFor="bf4">
                                    <input
                                        name="bestFeatures"
                                        id="bf4"
                                        type="checkbox"
                                        value="size"
                                    />
                                    Its big!
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="form__group">
                        <h3>
                            What would you say that are the worst bits of your rubber duck?
                        </h3>
                        <ul>
                            <li>
                                <label>
                                    <input name="worstFeatures" type="checkbox" value="colour" />
                                    It's yellow!
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="worstFeatures" type="checkbox" value="sound" />
                                    It squeaks!
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="worstFeatures" type="checkbox" value="logo" />
                                    It has a logo!
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="worstFeatures" type="checkbox" value="size" />
                                    Its big!
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="form__group radio">
                        <h3>How do you rate your rubber duck consistency?</h3>
                        <ul>
                            <li>
                                <input
                                    id="consistency1"
                                    type="radio"
                                    name="consistency"
                                    value="1"
                                />
                                <label htmlFor="consistency1">1</label>
                            </li>
                            <li>
                                <input
                                    id="consistency2"
                                    type="radio"
                                    name="consistency"
                                    value="2"
                                />
                                <label htmlFor="consistency2">2</label>
                            </li>
                            <li>
                                <input
                                    id="consistency3"
                                    type="radio"
                                    name="consistency"
                                    value="3"
                                />
                                <label htmlFor="consistency3">3</label>
                            </li>
                            <li>
                                <input
                                    id="consistency4"
                                    type="radio"
                                    name="consistency"
                                    value="4"
                                />
                                <label htmlFor="consistency4">4</label>
                            </li>
                        </ul>
                    </div>
                    <div className="form__group radio">
                        <h3>How do you rate your rubber duck colour?</h3>
                        <ul>
                            <li>
                                <input id="consistency11" type="radio" name="color" value="1" />
                                <label htmlFor="consistency11">1</label>
                            </li>
                            <li>
                                <input id="consistency22" type="radio" name="color" value="2" />
                                <label htmlFor="consistency22">2</label>
                            </li>
                            <li>
                                <input id="consistency33" type="radio" name="color" value="3" />
                                <label htmlFor="consistency33">3</label>
                            </li>
                            <li>
                                <input id="consistency44" type="radio" name="color" value="4" />
                                <label htmlFor="consistency44">4</label>
                            </li>
                        </ul>
                    </div>
                    <div className="form__group radio">
                        <h3>How do you rate your rubber duck logo?</h3>
                        <ul>
                            <li>
                                <input id="consistency111" type="radio" name="logo" value="1" />
                                <label htmlFor="consistency111">1</label>
                            </li>
                            <li>
                                <input id="consistency222" type="radio" name="logo" value="2" />
                                <label htmlFor="consistency222">2</label>
                            </li>
                            <li>
                                <input id="consistency333" type="radio" name="logo" value="3" />
                                <label htmlFor="consistency333">3</label>
                            </li>
                            <li>
                                <input id="consistency444" type="radio" name="logo" value="4" />
                                <label htmlFor="consistency444">4</label>
                            </li>
                        </ul>
                    </div>
                    <div className="form__group">
                        <h3>How do you like to spend time with your rubber duck</h3>
                        <ul>
                            <li>
                                <label>
                                    <input name="timeSpent" type="checkbox" value="swimming" />
                                    Swimming
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="timeSpent" type="checkbox" value="bathing" />
                                    Bathing
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input name="timeSpent" type="checkbox" value="chatting" />
                                    Chatting
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        name="timeSpent"
                                        type="checkbox"
                                        value="dont spend time with it"
                                    />
                                    I don't like to spend time with it
                                </label>
                            </li>
                        </ul>
                    </div>
                    <label>
                        What else have you got to say about your rubber duck?
                        <textarea name="review" cols={30} rows={10}></textarea>
                    </label>
                    <label>
                        Put your name here (if you feel like it):
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Leave us your email pretty please??
                        <input type="email" name="email" />
                    </label>
                    <input
                        className="form__submit"
                        type="submit"
                        value="Submit Survey!"
                    />
                </form>
            </section>
        </main>
    );
}

export default Main;