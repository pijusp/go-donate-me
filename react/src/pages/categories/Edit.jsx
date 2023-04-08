import { useContext, useState } from "react";

import { actionsList, Store } from "../../store";

export default function Edit() {
    const { store, dispatch } = useContext(Store);

    const [title, setTitle] = useState(store?.data?.title);
    const [description, setDescription] = useState(store?.data?.description);
    const [donationAmount, setDonationAmount] = useState(store?.data?.goal_sum);

    const edit = (_) => {
        dispatch(
            actionsList["stories-edit"](
                { title, description, goal_sum: donationAmount },
                store?.data?.id
            )
        );
    };
    return (
        <div className="container-lg">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card m-5">
                        <div className="card-header">Edit your story</div>
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
                                <label htmlFor="floatingInput">
                                    New wish title?
                                </label>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    New description
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
                                <label htmlFor="floatingInput">Wish goal</label>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={edit}
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
