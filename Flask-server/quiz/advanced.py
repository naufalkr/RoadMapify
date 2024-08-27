# advanced.py
def advanced_quiz():
    questions = [
        ("Platform mana yang Anda sukai untuk dikembangkan?", {"a": ("iOS", 5), "b": ("Android", 5), "c": ("Frontend", 3, "Backend", 2), "d": ("DevOps", 4, "Backend", 3)}),
        ("Seberapa familiar anda dengan bahasa pemrograman Swift?", {"a": ("iOS", 1), "b": ("iOS", 3), "c": ("iOS", 5), "d": ("iOS", 0, "Android", 2, "Backend", 2, "DevOps", 2)}),
    ]

    scores = {"iOS": 0, "Android": 0, "Frontend": 0, "Backend": 0, "DevOps": 0}

    for i, (question, options) in enumerate(questions):
        print(f"{i+1}. {question}")
        for key, value in options.items():
            print(f"{key}) {value[0]}")
        answer = input("Answer: ").upper()

        if answer in options:
            for j in range(1, len(options[answer]), 2):
                scores[options[answer][j-1]] += options[answer][j]
        else:
            print("Pilihan tidak valid. Jawaban dilewati.")

    sorted_scores = sorted(scores.items(), key=lambda item: item[1], reverse=True)
    print("3 Path Teratas:")
    for i in range(3):
        print(f"{i+1}. {sorted_scores[i][0]} dengan skor {sorted_scores[i][1]}")

if __name__ == "__main__":
    advanced_quiz()
