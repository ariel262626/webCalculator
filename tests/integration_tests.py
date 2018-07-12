import unittest, requests, json

class TestCalculator(unittest.TestCase):

    def test_first_input(self):
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': None, 'input': '1'})
        response_content = json.loads(response.content)
        self.assertEqual(response_content['display'], '1')
        self.assertEqual(response_content['lastState'], '')
        self.assertEqual(response_content['leftSide'], '')
        self.assertEqual(response_content['operator'], '')


    def test_full_calculation(self):
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': None, 'input': '2'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '+'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '7'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '*'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '2'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '-'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '4'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '='})
        s = json.loads(response.content)
        self.assertEqual(s['display'], 14)

    
    def test_full_calculation2(self):
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': None, 'input': '5'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '3'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '+'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '2'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '/'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '2'})
        s = json.loads(response.content)
        response = requests.post('http://127.0.0.1:3000/calculate', json={'calculatorState': s, 'input': '='})
        s = json.loads(response.content)
        self.assertEqual(s['display'], 27.5)

# main
if __name__ == '__main__':
    unittest.main()