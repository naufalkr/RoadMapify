import pandas as pd
import numpy as np
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report
import os
import pickle
import re
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
import string
from sklearn.naive_bayes import BernoulliNB
from sklearn.linear_model import LogisticRegression

# Initialize Stemmer and StopWordRemover
stemmer_factory = StemmerFactory()
stemmer = stemmer_factory.create_stemmer()

stop_factory = StopWordRemoverFactory()
stop_words = stop_factory.get_stop_words()

titles = ['backend', 'ai', 'devops', 'frontend', 'gamedev', 'ios', 'android']

# Load models
def load_model(filepath):
    with open(filepath, 'rb') as file:
        model = pickle.load(file)
    return model

bernoulli_model = load_model("D:/COMPFEST/aic/Flask-server/nlp model/bernoulli_model_v8_c7_e255.pickle")
multinomial_model = load_model("D:/COMPFEST/aic/Flask-server/nlp model/mnb_model_v8_c7_e255.pickle")
logistic_model = load_model("D:/COMPFEST/aic/Flask-server/nlp model/logistic_model_v8_c7_e255.pickle")

with open('D:/COMPFEST/aic/Flask-server/nlp model/tfidf_vectorizer_v8.pkl', 'rb') as f:
    tfidf = pickle.load(f)

with open('D:/COMPFEST/aic/Flask-server/nlp model/select_kbest_v8.pkl', 'rb') as f:
    selector = pickle.load(f)

class VoteClassifier:
    def __init__(self, *classifiers):
        self._classifiers = classifiers

    def classify(self, prep_data):
        votes = np.zeros(len(titles))  # Initialize votes to zeros
        for c in self._classifiers:
            v = c.predict_proba(prep_data)  # Predict probabilities
            votes += v.mean(axis=0)  # Aggregate probabilities
        votes /= len(self._classifiers)  # Average the votes
        return votes

# def normalize_negation(text):
#     words = word_tokenize(text)
#     negation = ['tidak', "bukan"]
#     document = []
#     i = 0
#     while i < len(words):
#         if any(string in words[i] for string in negation):
#             antonym_found = False
#             synset = wordnet.synsets(words[i+1])
#             for s in synset:
#                 for synonym in s.lemmas():
#                     for antonym in synonym.antonyms():
#                         document.append(antonym.name())
#                         antonym_found = True
#                         break
#                     if antonym_found:
#                         break
#                 if antonym_found:
#                     break
#             i += 1
#         else:
#             document.append(words[i])
#         i += 1
#     return document

s = "saya senang dengan pemrograman yang berkaitan dengan server dan API"

data = [s]
prep_data = []

for d in data:
    d = [stemmer.stem(dt).lower() for dt in d.split(' ')]
    d = [dt for dt in d if dt not in stop_words]
    prep_data.append(' '.join(d))

prep_data_tfidf = tfidf.transform(prep_data)
prep_data_selected = selector.transform(prep_data_tfidf)

# Initialize classifiers
bernoulli = BernoulliNB().fit(tfidf.transform(prep_data), np.zeros(len(prep_data)))  # Placeholder
multinomial = MultinomialNB().fit(tfidf.transform(prep_data), np.zeros(len(prep_data)))  # Placeholder
# logistic_regression = LogisticRegression().fit(tfidf.transform(prep_data), np.zeros(len(prep_data)))  # Placeholder

classifier = VoteClassifier(bernoulli_model, multinomial_model)

res = classifier.classify(prep_data_selected)
print(res)
print(titles[np.argmax(res)])
