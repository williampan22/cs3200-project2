# Task 1

(5 pts) Provide the problem requirements and the conceptual model in UML for your project. You can reuse the ones made in Project 1.

#### Go to https://github.com/williampan22/cs3200-project2/blob/main/TASK1.pdf in the github repository.


# Task 2

(15 pts) Adapt the Logical Data model from your Project 2 to have hierarchical tables. This is, main (root) tables from which all the other tables relate to. This main tables will become later your Mongo Collections. From your main tables you can have aggregation/composition, one to many and many to many relationships.

#### Go to https://github.com/williampan22/cs3200-project2/blob/main/TASK2.pdf in the github repository.

# Task 3

(10 pts) From this logical model define the main Collections (Documents/Tables) you will be using in your Mongo Database. Provide a couple of JSON examples of these objects with comments when necessary. Think about a document that you will give to another database engineer that would take over your database. 

#### There are 2 main examples I provided. There is a JSON document that shows the Mongo Database for 2 colleges: Northeastern University and Boston University. 

#### Example 1: https://github.com/williampan22/cs3200-project2/blob/main/TASK3_EXAMPLE_DATA_1_NEU.json

#### Example 2: https://github.com/williampan22/cs3200-project2/blob/main/TASK3_EXAMPLE_DATA_1_NEU.json

###### To see the two examples (NEU and BU) be combined into one big document (along with Harvard and MIT in the Colleges Documents), proceed to Task 4.

# Task 4

(15 pts) Populate the tables with test data. You can use tools such as https://www.mockaroo.com/schemasLinks to an external site. or  https://www.generatedata.com/Links to an external site.. You can export the sample data to JSON and then use mongoimport or Mongo Compass to populate your tables. Include in your repository a dump file that can be use to regenerate your database, and the instructions on how to initialize it. You should share the instructions on how to import these data into tables by providing the data in JSON format and instructions on how to load it using mongoImport or mongo Compass

##### The main MongoDB database contains 4 colleges: Northeastern University, Boston University, Harvard, and MIT. It is populated with these colleges and numerous students, dining halls, food dishes, servings, and ratings. It is in a JSON format.

#### To view, go to https://github.com/williampan22/cs3200-project2/blob/main/TASK4_POPULATED_DATA.json 

#### To import into MongoDBCompass, follow these steps. 

#### MY CODE ASSUMES THAT YOUR DATABASE IS CALLED project2 and YOUR COLLECTION IS CALLED college_dininghalls. Go to databases, press "create database" and call it project2. Press create collection and call it college_dininghalls. Click add data -> import JSON/CSV file. Download the JSON file from https://github.com/williampan22/cs3200-project2/blob/main/TASK4_POPULATED_DATA.json and import the file. 

![image](https://github.com/williampan22/cs3200-project2/assets/90793237/ba8684c2-fc16-47b1-8e80-551de8b4023a)


# Task 5

(30 pts) Define and execute at least five queries that show your database. At least one query must use the aggregation framework https://docs.mongodb.com/manual/aggregation/Links to an external site., one must contain a complex search criterion (more than one expression with logical connectors like $or), one should be counting documents for an specific user, and one must be updating a document based on a query parameter 

#### My five queries can be found at the following links in the github repo: 

https://github.com/williampan22/cs3200-project2/blob/main/TASK5_QUERY1.js

https://github.com/williampan22/cs3200-project2/blob/main/TASK5_QUERY2.js

https://github.com/williampan22/cs3200-project2/blob/main/TASK5_QUERY3.js

https://github.com/williampan22/cs3200-project2/blob/main/TASK5_QUERY4.js

https://github.com/williampan22/cs3200-project2/blob/main/TASK5_QUERY5.js

#### To run the queries, clone the github repo. Then type "npm install" into the terminal to download all the dependencies. To run the queries, type the following into the terminal: node .\TASK5_QUERY1.js (for query1). Replace QUERY1 with QUERY2 and so on....

#### I have also provided what the output is from each query in comments at the top of each query file. 

###### It is important you do not run query4 before grading query1, 2, and 3. This is because query4 is my query that updates the database and will change the database data.





