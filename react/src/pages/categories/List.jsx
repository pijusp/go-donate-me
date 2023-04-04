import { useContext } from "react";
import { Store } from "../../store";

export default function List() {
    const { store } = useContext(Store);
    return (
        <>
            <div className="card-header">
                <h2>Wishes List</h2>
            </div>
            <div
                className="row row-cols-1 row-cols-md-2 g-4"
                style={{ padding: "20px" }}
            >
                {store?.data?.map((stories) => (
                    <div className="col" key={stories.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                /* {stories.image ? (
                                                <img
                                                    className="list-image"
                                                    src={IMG + stories.img}
                                                />
                                            ) : (
                                                <img
                                                    className="list-image"
                                                    src={IMG + "no.gif"}
                                                />
                                            )} */
                                src="/bulet.jpg"
                                className="card-img-top"
                                alt="tavotevas"
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title">{stories.title}</h5>
                                <p className="card-text">
                                    {stories.description}
                                </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Start sum: {stories.start_sum}
                                </li>
                                <li className="list-group-item">
                                    Current sum: {stories.current_sum}
                                </li>
                                <li className="list-group-item">
                                    Goal sum: {stories.goal_sum}
                                </li>
                            </ul>
                            <div className="card-body">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name.."
                                ></input>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter the donation amount.."
                                ></input>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="card-body">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    // onClick={(_) => {
                                    //     dispatch(
                                    //         actionsList["categories-delete"](
                                    //             stories.id
                                    //         )
                                    //     );
                                    //     start();
                                    // }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
