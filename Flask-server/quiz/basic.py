def basic_quiz():
    questions = [
        ("Apa output dari kode berikut?\n\nx = 5\ny = 10\nprint(x + y)\na) 15\nb) 5\nc) 10\nd) Error\nJawaban: ", "a"),
        ("Bagaimana cara mengulang sebuah blok kode sebanyak 5 kali di Python?\na) for i in range(5):\nb) while i < 5:\nc) repeat 5 times:\nd) loop(5):\nJawaban: ", "a"),
        ("Apa yang dimaksud dengan tipe data 'boolean'?\na) Tipe data yang menyimpan teks\nb) Tipe data yang menyimpan angka desimal\nc) Tipe data yang menyimpan nilai True atau False\nd) Tipe data yang menyimpan tanggal\nJawaban: ", "c"),
        ("Apa fungsi dari perintah 'return' dalam sebuah fungsi di Python?\na) Menghentikan eksekusi fungsi\nb) Mengembalikan nilai dari fungsi\nc) Melanjutkan eksekusi fungsi\nd) Mengulangi fungsi dari awal\nJawaban: ", "b"),
        ("Apa hasil dari ekspresi berikut?\n\n2 ** 3\na) 6\nb) 8\nc) 9\nd) 5\nJawaban: ", "b"),
        ("Apa yang akan ditampilkan oleh kode berikut?\n\nprint('Hello' + 'World')\na) HelloWorld\nb) Hello World\nc) Hello+World\nd) Error\nJawaban: ", "a"),
        ("Bagaimana cara mendefinisikan sebuah fungsi di Python?\na) def functionName():\nb) function functionName():\nc) create function functionName():\nd) def functionName;\nJawaban: ", "a"),
        ("Apa yang dimaksud dengan 'list' dalam Python?\na) Tipe data untuk menyimpan angka\nb) Tipe data untuk menyimpan teks\nc) Tipe data untuk menyimpan koleksi item\nd) Tipe data untuk menyimpan kunci dan nilai\nJawaban: ", "c"),
        ("Bagaimana cara menambahkan item ke dalam list di Python?\na) list.add(item)\nb) list.append(item)\nc) list.insert(item)\nd) list.push(item)\nJawaban: ", "b"),
        ("Apa yang akan dihasilkan oleh kode berikut?\n\nmyList = [1, 2, 3]\nprint(len(myList))\na) 3\nb) 2\nc) 1\nd) Error\nJawaban: ", "a"),
        ("Apa yang dimaksud dengan 'looping' dalam pemrograman?\na) Menjalankan blok kode sekali\nb) Menjalankan blok kode berulang kali\nc) Menghentikan program\nd) Memulai program\nJawaban: ", "b"),
        ("Bagaimana cara mendefinisikan variabel dalam Python?\na) x == 10\nb) x = 10\nc) int x = 10\nd) var x = 10\nJawaban: ", "b"),
        ("Apa hasil dari operasi berikut?\n\n10 // 3\na) 3.33\nb) 3\nc) 4\nd) 10\nJawaban: ", "b"),
        ("Apa yang dimaksud dengan 'conditional statement' dalam pemrograman?\na) Pernyataan yang dijalankan terus menerus\nb) Pernyataan yang hanya dijalankan jika kondisi tertentu terpenuhi\nc) Pernyataan yang tidak pernah dijalankan\nd) Pernyataan yang mengembalikan nilai\nJawaban: ", "b"),
        ("Bagaimana cara mengonversi string ke integer dalam Python?\na) int('123')\nb) str('123')\nc) convert('123')\nd) toInt('123')\nJawaban: ", "a"),
        ("Apa itu 'array'?\na) Struktur data yang menyimpan elemen dalam urutan tertentu\nb) Tipe data yang menyimpan teks\nc) Struktur data yang menyimpan elemen acak\nd) Struktur data yang hanya menyimpan angka\nJawaban: ", "a"),
        ("Apa itu 'class' dalam OOP?\na) Fungsi dalam program\nb) Variabel dalam program\nc) Blueprint untuk membuat objek\nd) Kumpulan data acak\nJawaban: ", "c"),
        ("Apa itu 'inheritance' dalam OOP?\na) Kemampuan sebuah class untuk mewarisi sifat dari class lain\nb) Penggunaan ulang variabel dalam class\nc) Membuat objek baru dalam class\nd) Menghapus data dari objek\nJawaban: ", "a")
    ]

    correct_answers = 0
    for i, (question, correct_answer) in enumerate(questions):
        print(f"{i+1}. {question}")
        answer = input("Answer: ")
        if answer.lower() == correct_answer.lower():
            print("Benar")
            correct_answers += 1
        else:
            print("Salah")

    print(f"Skor Anda: {correct_answers}/{len(questions)}")

    if correct_answers >= 13:
        print("Lulus! Anda dapat melanjutkan ke pertanyaan lanjutan.")
        return True
    else:
        print("Tidak Lulus. Anda akan diarahkan ke path dasar pemrograman, struktur data, dan OOP.")
        return False

if __name__ == "__main__":
    basic_quiz()
