from flask import request, Flask, jsonify
from wopyno.wopyno import nbrWords, nbrCharacters, occurences, yakeText
import os, sys

fpid = os.fork()
if fpid!=0:
  # Running as daemon now. PID is fpid
  sys.exit(0)

api = Flask(__name__)

@api.route('/characters', methods=['POST'])
def getChars():
    if "text" in request.get_json():
        return jsonify({"number_characters": nbrCharacters(request.get_json()["text"])})

@api.route('/words', methods=['POST'])
def getWords():
    if "text" in request.get_json():
        return jsonify({ "number_words": nbrWords(request.get_json()["text"])})

@api.route('/occurences', methods=['POST'])
def getOccurences():
    if "text" in request.get_json():
        return jsonify({ "number_occurences_per_word":occurences(request.get_json()["text"])})

@api.route('/keywords', methods=['POST'])
def getKeywords():
    print(request.get_json())
    if "text" in request.get_json():
        return jsonify({"relevant_keywords":yakeText(request.get_json()["text"], request.get_json()['number']), "limit": request.get_json()['number']})

@api.route('/version', methods=['GET'])
def getVersion():
    return "Python API version 0.1"


if __name__ == '__main__':
    api.run()