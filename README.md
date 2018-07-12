1. Installations:
    npm install mocha


2. To run currency-calculator:
run the commands: 
    cd Docker
    node calculator.js
    //Should see 'listening...' printed in console
( Example of curl: curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": "1"} )

3. To run the unit tests:
Run commands:
    cd tests
    mocha

4. To run the integration tests:
Ensure the server is running first
Run commands:
    cd tests
    python integration_tests.py

5. To build and run Docker:
Run the commands:
    cd Docker
    //To build an image of the calculator we created
    docker build . -t currency-calculator
    //To run the image as a container on port 3000 - should see 'listening...' //printed in console
    docker run -p 3000:3000 currency-calculator

6. Docker compose:
run the command: 
    docker-compose up



