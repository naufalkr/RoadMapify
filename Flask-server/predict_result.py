import subprocess
import sys
import os

# Periksa apakah nltk dan Sastrawi sudah diinstal
try:
    import nltk
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "nltk"])

try:
    import Sastrawi
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PySastrawi"])

from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from model import TextClassifier, VoteClassifier
import numpy as np

# Path ke file pickle yang sudah Anda simpan
tfidf_vectorizer_path = "D:/COMPFEST/aic/Flask-server/nlp model/tfidf_vectorizer_v8.pkl"
select_kbest_path = "D:/COMPFEST/aic/Flask-server/nlp model/select_kbest_v8.pkl"
bernoulli_model_path = "D:/COMPFEST/aic/Flask-server/nlp model/bernoulli_model_v8_c7_e255.pickle"
multinomial_model_path = "D:/COMPFEST/aic/Flask-server/nlp model/mnb_model_v8_c7_e255.pickle"
logistic_model_path = "D:/COMPFEST/aic/Flask-server/nlp model/logistic_model_v8_c7_e255.pickle"

# Inisialisasi TextClassifier
bernoulli = TextClassifier(bernoulli_model_path, tfidf_vectorizer_path, select_kbest_path)
multinomial = TextClassifier(multinomial_model_path, tfidf_vectorizer_path, select_kbest_path)
logistic_regression = TextClassifier(logistic_model_path, tfidf_vectorizer_path, select_kbest_path)

# Inisialisasi VoteClassifier
vote_classifier = VoteClassifier(bernoulli, multinomial, logistic_regression)

# Contoh input untuk prediksi
input_text = "saya mempunyai pengalaman melakukan pemrograman pada produk apple"

# Lakukan prediksi
preprocessed_text = bernoulli.preprocess(input_text)  # preprocess with one classifier
text_tfidf = bernoulli.vectorizer.transform([preprocessed_text])
text_selected = bernoulli.selector.transform(text_tfidf)

res = vote_classifier.classify(text_selected)
predicted_label = titles[np.argmax(res)]
print(f"Predicted Label (VoteClassifier): {predicted_label}")
