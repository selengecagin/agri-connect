import React, { useState, useEffect } from "react";
import axios from "axios";

interface Question {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
  liked: boolean;
  disliked: boolean;
  user: string;
  description: string;
  imageUrl: string;
}

interface AnswerProps {
  onSubmit: (answer: string, image: File | null) => void;
}

const QuestionComponent: React.FC<{
  question: Question | null;
  handleLike: (id: number) => void;
  handleDislike: (id: number) => void;
}> = ({ question, handleLike, handleDislike }) => {
  if (!question) {
    return <div>Loading...</div>;
  }

  const dummyImages = [
    "https://via.placeholder.com/130/a0e4f3",
    "https://via.placeholder.com/130/a0e4f3",
    "https://via.placeholder.com/130/a0e4f3",
  ];

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Question Title
      </h1>
      <div
        style={{
          maxWidth: 800,
          margin: "40px auto",
          padding: 20,
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: 20,
            padding: 10,
            borderBottom: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ marginTop: 0 }}>{question.text}</h3>
          <div style={{ marginTop: 20 }}>
            <p>
              <strong>{question.user}:</strong> {question.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "5px",
              }}
            >
              {dummyImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Example"
                  style={{
                    marginTop: 10,
                    maxHeight: 200,
                    marginRight: index < dummyImages.length - 1 ? "5px" : "0",
                  }}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                marginRight: 5,
                padding: 3,
                border: "none",
                borderRadius: 5,
                backgroundColor: question.liked ? "#D3D3D3" : "#81C784",
                color: "#fff",
                cursor: question.liked ? "not-allowed" : "pointer",
              }}
              onClick={() => handleLike(question.id)}
              disabled={question.liked || question.disliked}
            >
              Like ({question.likes})
            </button>
            <button
              style={{
                marginRight: 5,
                padding: 2,
                border: "none",
                borderRadius: 5,
                backgroundColor: question.disliked ? "#D3D3D3" : "#E57373",
                color: "#fff",
                cursor: question.disliked ? "not-allowed" : "pointer",
              }}
              onClick={() => handleDislike(question.id)}
              disabled={question.liked || question.disliked}
            >
              Dislike ({question.dislikes})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnswerComponent: React.FC<AnswerProps> = ({ onSubmit }) => {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(answer, image);
    setAnswer("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Answer</h2>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write Your Answer..."
        rows={4}
        cols={50}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          border: "1px solid #ccc",
        }}
      />
      <br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div>
          <img
            src={preview}
            alt="Preview"
            style={{ marginTop: 10, maxHeight: 200 }}
          />
        </div>
      )}
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            padding: 5,
            border: "none",
            borderRadius: 5,
            backgroundColor: "#4CAF50",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Send Answer
        </button>
      </div>
    </div>
  );
};

const AgriConnectComponent: React.FC = () => {
  const [question, setQuestion] = useState<Question | null>(null);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      ); // Using JSONPlaceholder
      const item = response.data[0]; // Get the first question
      const data: Question = {
        id: item.id,
        text: item.title,
        likes: Math.floor(Math.random() * 100), // Mocking likes
        dislikes: Math.floor(Math.random() * 100), // Mocking dislikes
        liked: false,
        disliked: false,
        user: `User${item.userId}`,
        description: item.body,
        imageUrl: "", // Placeholder, not used directly
      };
      setQuestion(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleLike = (id: number) => {
    if (question && question.id === id) {
      setQuestion({ ...question, likes: question.likes + 1, liked: true });
    }
  };

  const handleDislike = (id: number) => {
    if (question && question.id === id) {
      setQuestion({
        ...question,
        dislikes: question.dislikes + 1,
        disliked: true,
      });
    }
  };

  const handleAnswerSubmit = (answer: string, image: File | null) => {
    console.log("Answer Sent:", answer, "Image:", image);
  };

  return (
    <div>
      <div
        style={{
          maxWidth: 800,
          margin: "40px auto",
          padding: 20,
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <QuestionComponent
          question={question}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
        <AnswerComponent onSubmit={handleAnswerSubmit} />
      </div>
    </div>
  );
};
export default AgriConnectComponent;
