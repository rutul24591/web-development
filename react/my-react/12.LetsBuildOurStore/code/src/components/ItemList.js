import { useDispatch } from "react-redux";

import constants from "../utils/constants";
import { addItem } from "../store/cartSlice";

const ItemList = (props) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch the action
        dispatch(addItem(item));
    };

    const { items } = props;
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                    >
                        <div className="w-9/12">
                            <div className="py-3">
                                <span className="text-lg font-bold">
                                    {item.card.info.name}
                                </span>
                                <span>
                                    {" "}
                                    - ₹
                                    {item.card.info.price / 100 ||
                                        item.card.info.defaultPrice / 100}
                                </span>
                            </div>
                            <p className="text-[15px]">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="w-3/12 p-2 relative">
                            <div className="mt-34 absolute z-0">
                                <button
                                    className="p-2 shadow-lg bg-black text-white mx-16 rounded-sm text-lg hover:cursor-pointer"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add+
                                </button>
                            </div>
                            <img
                                className="rounded-md w-[200px] h-[160px]"
                                src={constants.CDN_URL + item.card.info.imageId}
                            ></img>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
