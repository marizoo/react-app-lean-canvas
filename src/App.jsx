import React, { useState } from "react";
import "./styles/appStyles.css";
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

const App = () => {
    // 01. a1. to display datas on the app
    const [datas, setDatas] = useState([]);

    // 02. a1/ax. A State to save the text in textarea
    const [texts, setTexts] = useState({
        problem: "",
        solution: "",
        keyMetrics: "",
        uniqueValueProposition: "",
        unfairAdvantage: "",
        channels: "",
        customerSegments: "",
        costStructure: "",
        revenueStreams: "",
    });

    // 02. a2/ax. to data bind the input (textArea).
    const handleTextAreaInput = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newTexts = { ...texts };
        newTexts[fieldName] = fieldValue;

        setTexts(newTexts);
    };

    //  02. a3/ax. to clear the form
    const handleClearForm = (ev, name) => {
        const fieldName = ev.target.getAttribute("name");

        const clearText = { ...texts };
        clearText[fieldName] = "";

        setTexts(clearText);
    };

    return (
        <div className="app">
            <div className="app-container">
                <h1 className="app-title">Lean Canvas</h1>
                {/*  Top ---------------- */}
                <div className="app-container-top">
                    <div className="A-problem card">
                        <div className="card-datas">
                            <h2>Problem</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.problem}
                                className="textArea"
                                name="problem"
                                id="problem"
                                placeholder="What problem(s) are you trying to solve..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    <div className="B1-Solution card">
                        <div className="card-datas">
                            <h2>Solution</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.solution}
                                className="textArea"
                                name="solution"
                                id="solution"
                                placeholder="List the solution(s) to the problem..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    <div className="B2-keyMetrics card">
                        <div className="card-datas">
                            <h2>Key Metrics</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.keyMetrics}
                                className="textArea"
                                name="keyMetrics"
                                id="keyMetrics"
                                placeholder="What are the key metrics?"
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    <div className="C-uniqueValueProp card">
                        <div className="card-datas">
                            <h2>Unique Value Proposition</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.uniqueValueProposition}
                                className="textArea"
                                name="uniqueValueProposition"
                                id="uniqueValueProposition"
                                placeholder="List the unique value proposition..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    <div className="D1-unfairAdvantage card">
                        <div className="card-datas">
                            <h2>Unfair Advantage</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.unfairAdvantage}
                                className="textArea"
                                name="unfairAdvantage"
                                id="unfairAdvantage"
                                placeholder="List the unfair advantages..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    <div className="D2-channels card">
                        <div className="card-datas">
                            <h2>Channels</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.channels}
                                className="textArea"
                                name="channels"
                                id="channels"
                                placeholder="List the Channels..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    <div className="E-customerSegments card">
                        <div className="card-datas">
                            <h2>Customer Segments</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.customerSegments}
                                className="textArea"
                                name="customerSegments"
                                id="customerSegments"
                                placeholder="Customer Segments..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                    {/* </div> */}
                    {/* bottom ----------- */}
                    {/* <div className="app-container-bottom "> */}
                    <div className="F-costStructure card">
                        <div className="card-datas">
                            <h2>Cost Structure</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.costStructure}
                                className="textArea"
                                name="costStructure"
                                id="costStructure"
                                placeholder="List the cost structure..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>

                    <div className="G-revenueStreams card">
                        <div className="card-datas">
                            <h2>Revenue Streams</h2>
                            <textarea
                                onChange={handleTextAreaInput}
                                value={texts.revenueStreams}
                                className="textArea"
                                name="revenueStreams"
                                id="revenueStreams"
                                placeholder="List the revenue streams..."
                            ></textarea>
                        </div>
                        {/* <div className="card-footer">
                            <RiPencilLine className="card-footer-btnEdit icon" />
                            <RiDeleteBinLine className="card-footer-btnDelete icon" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
