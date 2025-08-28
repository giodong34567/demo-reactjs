import { useEffect, useState } from "react";

function TodoList() {

    const [inputValue, setInputvalue] = useState("");
    const [listTodo, setListTodo] = useState([]);
    const storage_key = "todos";

    useEffect(() => {
        const savedTodo = localStorage.getItem(storage_key);
        if (savedTodo) {
            const parsedTodos = JSON.parse(savedTodo);
            setListTodo(parsedTodos);
        }
    }, [])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
            e.target.value = ""
        }
    };

    const btnAddOnclick = () => {
        addTodo();
    }

    useEffect(() => {
        localStorage.setItem(storage_key, JSON.stringify(listTodo));
    }, [listTodo]);

    const addTodo = () => {
        if (inputValue.trim() === "") return;
        setListTodo([...listTodo, inputValue]);
    }

    const removeTodo = (indexToRemove) => {
        setListTodo(prev => {
            return prev.filter((_, index) => index != indexToRemove);
        })
    }

    console.log(listTodo);

    return (
        <>
            <div className="text-center mt-2.5">
                <h1>To-do List</h1>
                <p>Quản lý công việc hàng ngày của bạn</p>
                <input type="text" placeholder="Mời bạn nhập công việc" className="" onChange={(e) => setInputvalue(e.target.value)} onKeyDown={handleKeyPress} />
                <button className="ml-6 bg-amber-400" onClick={btnAddOnclick}>Thêm</button>
            </div>
            <div className="text-center">
                <h2>Danh sách các việc cần làm:</h2>
                <div className="flex justify-center gap-10">
                    {/* Cột danh sách việc */}
                    <div className="flex flex-col gap-2">
                        {listTodo.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>

                    {/* Cột nút Xóa */}
                    <div className="flex flex-col gap-2">
                        {listTodo.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => removeTodo(index)}
                                className="bg-red-400 text-white px-2 rounded"
                            >
                                Xóa
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoList;