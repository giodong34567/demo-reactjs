import { useEffect, useState } from "react";
import CreateSkill from "./CreateSkill";

function Skills() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch("http://localhost:3001/skills")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                })
                .catch((err) => console.error("Error fetching data:", err));
        };
        fetchApi();
    }, []);

    return (
        <>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center border rounded-lg p-4 shadow-md 
             hover:shadow-xl hover:-translate-y-2 hover:scale-105 
             transition-transform duration-300 ease-in-out"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 mb-3"
                    />
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">Trình độ: {item.level}</p>
                    <p className="text-center text-gray-500 text-sm">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
        <CreateSkill/>
        </>
    );
}

export default Skills;
