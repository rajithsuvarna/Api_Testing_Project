# Testing Node.js API using Mocha & Chai


### 1. Install the required packages:
```
npm install
```

### 2. Run the test:
```
npm test
```

### Output:

![image](https://github.com/rajithsuvarna/Api_Testing_Project/assets/109891044/f8eaf335-7305-4e8b-bf34-bc6894681460)

### Description
Testing Node.js Express.js APIs using Mocha and Chai offers a comprehensive approach to ensure the reliability and functionality of your applications. Mocha provides a flexible and feature-rich testing framework, while Chai offers expressive assertions for clear and readable tests. Together, they empower developers to write concise, effective tests for their APIs, covering a wide range of scenarios and ensuring robustness throughout the development lifecycle. With Mocha and Chai, testing Node.js Express.js APIs becomes a seamless and efficient process, enhancing the quality and stability of your software.

### Testcases:
1. **GET**-Should return all resources when running GET all resource api
2. **GET**-Should return a resource if valid id is passed when running GET by resource id api
3. **GET**-Should return 400 error when invalid id is passed when running GET by resource id api with invalid id
4. **POST**-Should create a new resource  when running POST resource api
5. **POST**-Should return 400 error when invalid data passed when running  POST resource api with invalid data
6. **PUT**-should update the existing user and return 200 when running PUT resource api using valid resource id
7. **DELETE**-should delete requested id and return response 200 when running DELETE by resource id api
8. **DELETE,GET**-should return 404 when deleted user is requested when running GET by resource id api with deleted id

