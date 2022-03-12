import React from "react";

const Card = () => {
    return (
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
            <div className="card-footer">
                <RiPencilLine className="card-footer-btnEdit" />
                <RiDeleteBinLine className="card-footer-btnDelete" />
            </div>
        </div>
    );
};

export default Card;
