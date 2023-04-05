import { useContext, useState } from "react";
import { storiesCreate } from "../../actions";
import { Store } from "../../store";

export default function Create() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [donationAmount, setDonationAmount] = useState("");

    const { dispatch } = useContext(Store);
    const create = (_) => {
        dispatch(
            storiesCreate({
                title,
                description,
                goal_sum: donationAmount,
            })
        );
        setTitle("");
        setDescription("");
        setDonationAmount("");
    };
    return (
        <div className="container-lg">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card m-5">
                        <div className="card-header">What's your wish?</div>
                        <div className="card-body">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Your wish..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></input>
                                <label for="floatingInput">Wish title</label>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    Wish description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Your required amount..."
                                    value={donationAmount}
                                    onChange={(e) =>
                                        setDonationAmount(e.target.value)
                                    }
                                ></input>
                                <label for="floatingInput">Wish goal</label>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={create}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
