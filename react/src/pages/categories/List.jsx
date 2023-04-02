import { useContext } from "react";
import { Store, actionsList } from "../../store";

export default function List() {
    const { store, dispatch, start } = useContext(Store);
    return (
        <>
            {/* <div className="card mt-4">
                <div className="card-header">
                    <h2>Wishes List</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {store?.data?.map((stories) => (
                            <li key={stories.id} className="list-group-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">
                                            <h2>{stories.title}</h2>
                                        </div>
                                        <div className="col-2">
                                            <div>{stories.description} m</div>
                                        </div>
                                        <div className="col-2">
                                            <i>{stories.start_sum}</i>
                                        </div>
                                        <div className="col-2">
                                            <i>{stories.current_sum}</i>
                                        </div>
                                        <div className="col-2">
                                            <i>{stories.goal_sum}</i>
                                        </div>
                                        <div className="col-2">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={(_) => {
                                                    dispatch(
                                                        actionsList[
                                                            "sections-delete"
                                                        ](stories.id)
                                                    );
                                                    start();
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                        <div className="col-4">
                                            IMG PLACEHOLDER
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="card-header">
                    <h2>Wishes List</h2>
                </div>
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
                                src="../../../public/meistas.jpg"
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
                                    {stories.start_sum}
                                </li>
                                <li className="list-group-item">
                                    {stories.current_sum}
                                </li>
                                <li className="list-group-item">
                                    {stories.goal_sum}
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
