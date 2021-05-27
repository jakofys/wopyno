import unittest
from wopyno import * 

class TestStringMethods(unittest.TestCase):

    def test_nbrwords(self):
        self.assertEqual(nbrWords('foo foo foo'), 3)

    def test_occurences(self):
        self.assertEqual(occurences('foo foo foo'), {'foo': 3})

    def test_nbrcharacters(self):
        self.assertEqual(nbrCharacters('foo'), 3)

if __name__ == '__main__':
    unittest.main()