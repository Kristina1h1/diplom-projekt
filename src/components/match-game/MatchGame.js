import React, { useState } from "react";
import "./MatchGame.css";

function MatchGame({ breeds, onOpenBreed }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
        apartment: null,
        size: null,
        temperament: null,
        wool: null,
        experience: null,
    });

    const questions = [
        {
            title: "Где вы живете?",
            key: "apartment",
            options: [
                { label: "В квартире", value: true },
                { label: "В частном доме", value: false },
            ],
        },
        {
            title: "Какого размера кота вы хотите?",
            key: "size",
            options: [
                { label: "Маленького", value: "маленький" },
                { label: "Среднего", value: "средний" },
                { label: "Крупного", value: "крупный" },
                { label: "Не важно", value: "any" },
            ],
        },
        {
            title: "Какой характер вам ближе?",
            key: "temperament",
            options: [
                { label: "Спокойный (любит спать)", value: "спокойный" },
                { label: "Активный (любит играть)", value: "активный" },
                { label: "Не важно", value: "any" },
            ],
        },
        {
            title: "Готовы ли вы ухаживать за длинной шерстью?",
            key: "wool",
            options: [
                { label: "Нет, хочу короткую шерсть", value: "short" },
                { label: "Да, готов расчесывать", value: "long" },
                { label: "Не важно", value: "any" },
            ],
        },
        {
            title: "У вас есть опыт содержания кошек?",
            key: "experience",
            options: [
                { label: "Да, у меня уже были кошки", value: "yes" },
                { label: "Нет, это будет мой первый кот", value: "no" },
            ],
        },
    ];

    const handleAnswer = (key, value) => {
        setAnswers({ ...answers, [key]: value });
        if (step <= questions.length) {
            setTimeout(() => setStep(step + 1), 250);
        }
    };


    const getResults = () => {
        return breeds.filter((breed) => {
            const matchApartment = answers.apartment === null || breed.apartment === answers.apartment;
            const matchSize = answers.size === "any" || breed.size === answers.size;
            const matchTemp = answers.temperament === "any" || breed.temperament === answers.temperament;

            let matchWool = true;
            if (answers.wool === "short") {
                matchWool = breed.wool === "короткая" || breed.wool === "без шерсти";
            } else if (answers.wool === "long") {
                matchWool = breed.wool === "длинная" || breed.wool === "короткая";
            }

            let matchExp = true;
            if (answers.experience === "no") {
                matchExp = breed.temperament === "спокойный" && breed.wool !== "длинная";
            }

            return matchApartment && matchSize && matchTemp && matchWool && matchExp;
        });
    };

    const resetGame = () => {
        setStep(0);
        setAnswers({ apartment: null, size: null, temperament: null, wool: null, experience: null });
    };


    if (step === 0) {
        return (
            <div className="match-container">
                <div className="match-card start-card">
                    <div className="match-icon">🎯</div>
                    <h2>Подобрать кота</h2>
                    <p>Ответьте на 5 вопросов, и мы найдем идеальную породу для вашего образа жизни.</p>
                    <button className="start-btn" onClick={() => setStep(1)}>
                        Начать тест
                    </button>
                </div>
            </div>
        );
    }

    if (step > 0 && step <= questions.length) {
        const currentQ = questions[step - 1];
        return (
            <div className="match-container">
                <div className="match-card">
                    <div className="step-indicator">Шаг {step} из {questions.length}</div>
                    <h2>{currentQ.title}</h2>
                    <div className="options-list">
                        {currentQ.options.map((opt, i) => (
                            <button
                                key={i}
                                className="option-btn"
                                onClick={() => handleAnswer(currentQ.key, opt.value)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const results = getResults();
    return (
        <div className="match-container">
            <div className="match-card result-card">
                <h2>Ваши результаты</h2>
                {results.length > 0 ? (
                    <p>Вам идеально подойдут эти породы:</p>
                ) : (
                    <p>К сожалению, точного совпадения нет. Но посмотрите на этих красавцев!</p>
                )}

                <div className="results-list">
                    {(results.length > 0 ? results : breeds.slice(0, 3)).map((breed) => (
                        <div key={breed.id} className="result-item" onClick={() => onOpenBreed(breed)}>
                            <span className="result-name">{breed.name}</span>
                            <span className="result-arrow">→</span>
                        </div>
                    ))}
                </div>

                <button className="reset-btn" onClick={resetGame}>
                    Пройти еще раз
                </button>
            </div>
        </div>
    );
}

export default MatchGame;