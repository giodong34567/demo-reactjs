import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function SkillDetail() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/skills/${id}`)
      .then((res) => res.json())
      .then((data) => setSkill(data))
      .catch((err) => console.error("Error fetching skill:", err));
  }, [id]);

  if (!skill) return <p>Đang tải...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-md">
      <img src={skill.image} alt={skill.name} className="w-20 h-20 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-center">{skill.name}</h2>
      <p className="text-center text-gray-600 mb-2">Trình độ: {skill.level}</p>
      <p className="text-gray-500">{skill.description}</p>

      <div className="text-center mt-4">
        <Link
          to="/skills"
          className="text-blue-600 hover:underline"
        >
          ← Quay lại danh sách
        </Link>
      </div>
    </div>
  );
}

export default SkillDetail;
