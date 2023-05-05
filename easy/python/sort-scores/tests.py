import unittest
from code import sort_scores, get_initials

class TestSortScores(unittest.TestCase):
  def test_sort_scores(self):
      input = [
          { 'name': 'Alice', 'score': 80, 'age': 25 },
          { 'name': 'Bob', 'score': 90, 'age': 20 },
          { 'name': 'Charlie', 'score': 80, 'age': 30 },
          { 'name': 'Dave', 'score': 85, 'age': 35 },
          { 'name': 'Eve', 'score': 95, 'age': 22 },
      ]
      expected_output = [
          { 'name': 'Eve', 'score': 95, 'age': 22 },
          { 'name': 'Bob', 'score': 90, 'age': 20 },
          { 'name': 'Dave', 'score': 85, 'age': 35 },
          { 'name': 'Alice', 'score': 80, 'age': 25 },
          { 'name': 'Charlie', 'score': 80, 'age': 30 },
      ]
      self.assertEqual(sort_scores(input), expected_output)
  def test_get_initials(self):
      input = [
          { 'name': 'Alice', 'score': 80, 'age': 25 },
          { 'name': 'Bob', 'score': 90, 'age': 20 },
          { 'name': 'Charlie', 'score': 80, 'age': 30 },
          { 'name': 'Dave', 'score': 85, 'age': 35 },
          { 'name': 'Eve', 'score': 95, 'age': 22 },
      ]
      expected_output = 'EBDAC'
      self.assertEqual(get_initials(input), expected_output)