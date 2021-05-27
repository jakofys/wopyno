import re
import yake

# nbrWords count number of word in given text
def nbrWords(text):
    return len([ word for word in re.findall("[\wùéèàçÉÈÇÀÙ]*", text) if word != ""])

# nbrCharacters get number of character found in the given text
def nbrCharacters(text):
    nbr = 0
    # Make sure is utf-8 encoding character
    for char in text.encode("utf-8", "strict"):
        nbr+=1
    return nbr


def occurences(text):
    result = {}

    for word in re.findall("[\wùéèàçÉÈÇÀÙ]*", text):
        if word != "":
            if word not in result:
                result[word] = 0
            result[word]+=1
        
    return result

def yakeText(text, number):
    if number == None:
        number = 10
    words = []
    kw_extractor = yake.KeywordExtractor(top=number)
    for word in kw_extractor.extract_keywords(text):
        words.append({"key": word[0], "relevant": word[1]})
    return words