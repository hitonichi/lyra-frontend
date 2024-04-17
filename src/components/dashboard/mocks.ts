import { Article, InterviewQuestion } from './types';

export const itvQuestions: InterviewQuestion[] = [
  {
    question: 'Explain the benefits of proper inheritance.',
    answer:
      '1. Substitutability :The objects of a properly derived class can be easily and safely substituted for an object of its base class. 2. Extensibility :The properly derived class can be freely and safely used in place of its base class even if the properly derived class is created a lot later than defining the user code. Extending the functionalities of a system is much easier when you add a properly derived class containing enhanced functionalities. ',
    ref: 'https://www.careerride.com/C++-Interview-questions-Answer.aspx',
    field: 'C++',
  },
  {
    question: 'When should a function throw an exception?',
    answer:
      ' A function should throw an exception when it is not able to fulfil its promise. As soon as the function detects a question that prevents it from fulfilling its promise, it should throw an exception.If the function is able to handle the question, recover itself and deliver the promise, then the exception should not be thrown. If an event happens very frequently then exception handling is not the best way to deal with it. It requires proper fixation.',
    ref: 'https://www.careerride.com/C++-Interview-questions-Answer.aspx',
    field: 'C++',
  },
  {
    question: 'What are Polymorphic Classes',
    answer:
      'Polymorphic means many forms. The object of the polymorphic class pointer can store any derived class objects and called respective member functions when its object member functions is called automation',
    ref: 'https://www.geekinterview.com/Interview-Questions/Languages/C-Plus-Plus',
    field: 'C++',
  },
  {
    question: ' What is the basic difference between MySQL and MongoDB',
    answer:
      'MySQL and MongoDB are both free and open source databases. MySQL and MongoDB have a lot of basic differences in terms of data representation, querying, relationships, transactions, schema design and definition, normalization, speed and performance. By comparing MySQL with MongoDB, we are comparing Relational and non-relational databases.',
    ref: 'https://theprofessionalspoint.blogspot.com/2014/01/28-mongodb-nosql-database-interview.html',
    field: 'MongoDB',
  },
  {
    question: ' What is role of Profiler in MongoDB',
    answer:
      'MongoDB includes a database profiler which shows performance characteristics of each operation against the database. Using the profiler you can find queries (and write operations) which are slower than they should be; use this information, for example, to determine when an index is needed.',
    ref: 'https://theprofessionalspoint.blogspot.com/2014/01/28-mongodb-nosql-database-interview.html',
    field: 'MongoDB',
  },
  {
    question: 'What are the differences between MySQL_fetch_array(), MySQL_fetch_object(), MySQL_fetch_row()?',
    answer:
      'Mysql_fetch_object returns the result from the database as objects while mysql_fetch_array returns result as an array. This will allow access to the data by the field names. E.g. using mysql_fetch_object field can be accessed as $result->name and using mysql_fetch_array field can be accessed as $result->[name]. mysql_fetch_row($result):- where $result is the result resource returned from a successful query executed using the mysql_query() function.',
    ref: 'https://www.careerride.com/MySQL-Interview-Questions.aspx',
    field: 'MySQL',
  },
  {
    question: 'What Is MySQL',
    answer:
      'MySQL is a freely available open-source Database Management System (DBMS) that is primarily used for web apps and other software. Back in 2010, it was acquired by Oracle Corporation. MySQL has an active and strong community that contributes to its development. It is different from other DBMSs because of being free to use. This makes MySQL an ideal choice for developers and organizations looking for an effective management system.',
    ref: 'https://www.tecmint.com/mysql-interview-questions/',
    field: 'MySQL',
  },
  {
    question: 'What is the purpose of the ORDER BY clause in MySQL?',
    answer:
      'The ORDER BY clause is used to sort the result set of a query in ascending or descending order based on one or more columns. It allows you to control the order in which rows are returned from a SELECT statement.',
    ref: 'https://www.mysqltutorial.org/mysql-order-by.aspx',
    field: 'MySQL',
  },
  {
    question: 'Explain the difference between the WHERE and HAVING clauses in MySQL.',
    answer:
      'The WHERE clause is used to filter rows based on a specified condition in a SELECT, INSERT, UPDATE, or DELETE statement. The HAVING clause is used to filter rows returned by a GROUP BY clause based on a specified condition, typically involving aggregate functions.',
    ref: 'https://www.mysqltutorial.org/mysql-having.aspx',
    field: 'MySQL',
  },
  {
    question: 'What are the advantages of using transactions in MySQL?',
    answer:
      'Transactions ensure data integrity by allowing multiple SQL statements to be treated as a single logical unit of work. They provide features such as atomicity, consistency, isolation, and durability (ACID properties). Transactions help maintain database integrity and prevent data corruption.',
    ref: 'https://www.mysqltutorial.org/mysql-transaction.aspx',
    field: 'MySQL',
  },
  {
    question: 'Explain the purpose of the FOREIGN KEY constraint in MySQL.',
    answer:
      'The FOREIGN KEY constraint is used to enforce referential integrity between two tables. It ensures that the values in a column (or columns) of one table match the values in a referenced column (or columns) in another table. FOREIGN KEY constraints help maintain data consistency and prevent orphaned records.',
    ref: 'https://www.mysqltutorial.org/mysql-foreign-key/',
    field: 'MySQL',
  },
  {
    question: 'What is the difference between UNION and UNION ALL operators in MySQL?',
    answer:
      'UNION is used to combine the result sets of two or more SELECT statements into a single result set, removing duplicate rows. UNION ALL also combines the result sets of SELECT statements but retains all rows, including duplicates.',
    ref: 'https://www.mysqltutorial.org/sql-union-mysql.aspx',
    field: 'MySQL',
  },
  {
    question: 'What are some common HTTP methods used in RESTful API development?',
    answer:
      'Common HTTP methods used in RESTful API development include GET (retrieve data), POST (create data), PUT (update data), DELETE (remove data), and PATCH (partial update of data). These methods correspond to CRUD (Create, Read, Update, Delete) operations on resources.',
    ref: 'https://restfulapi.net/http-methods/',
    field: 'Full-Stack Developer',
  },
  {
    question: 'Explain the concept of middleware in the context of Express.js.',
    answer:
      'Middleware in Express.js are functions that have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle. They can perform tasks such as logging, authentication, data parsing, etc. Middleware can be chained together to process the request before it reaches the route handler.',
    ref: 'https://expressjs.com/en/guide/using-middleware.html',
    field: 'Full-Stack Developer',
  },
  {
    question: 'What is CORS and how do you handle it in a Node.js/Express application?',
    answer:
      'CORS (Cross-Origin Resource Sharing) is a security mechanism that allows resources on a web page to be requested from another domain outside the domain from which the first resource was served. In a Node.js/Express application, CORS can be handled by configuring CORS middleware to set the appropriate HTTP headers, allowing or denying cross-origin requests based on the specified origins, methods, and headers.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
    field: 'Full-Stack Developer',
  },
  {
    question: 'Explain the concept of state management in React.js.',
    answer:
      'State management in React.js involves managing the state of components to keep track of data changes over time. It allows components to re-render when the state changes, updating the user interface accordingly. State can be managed locally within a component using the useState hook or globally across the entire application using libraries like Redux or Context API.',
    ref: 'https://reactjs.org/docs/state-and-lifecycle.html',
    field: 'Full-Stack Developer',
  },
  {
    question: 'What are the advantages and disadvantages of using microservices architecture?',
    answer:
      'Advantages of microservices architecture include scalability, flexibility, independent deployment of services, technology diversity, and fault isolation. Disadvantages include increased complexity, distributed system challenges, data consistency concerns, performance overhead, and potential communication overhead.',
    ref: 'https://microservices.io/',
    field: 'Full-Stack Developer',
  },
  {
    question: 'What is the difference between Python 2 and Python 3?',
    answer:
      'Python 2 and Python 3 are two major versions of the Python programming language. Python 3 introduced several significant changes and improvements over Python 2, including print function, division operator behavior, Unicode support, and syntax changes. Python 2 is no longer maintained since January 1, 2020, and developers are encouraged to migrate to Python 3.',
    ref: 'https://wiki.python.org/moin/Python2orPython3',
    field: 'Python',
  },
  {
    question: 'Explain the differences between lists and tuples in Python.',
    answer:
      'Lists and tuples are both sequence data types in Python, but they have some key differences. Lists are mutable, meaning their elements can be modified after creation, while tuples are immutable, meaning their elements cannot be changed after creation. Lists are represented by square brackets [], while tuples are represented by parentheses ().',
    ref: 'https://realpython.com/python-lists-tuples/',
    field: 'Python',
  },
  {
    question: 'What is a Python decorator and how does it work?',
    answer:
      'A decorator in Python is a function that takes another function as an argument and extends its functionality without modifying its code. Decorators are commonly used to add behavior to functions dynamically, such as logging, caching, authentication, or modifying arguments or return values. Decorators are often applied using the "@" syntax before a function definition.',
    ref: 'https://realpython.com/primer-on-python-decorators/',
    field: 'Python',
  },
  {
    question: 'Explain the concept of list comprehension in Python.',
    answer:
      'List comprehension is a concise way to create lists in Python by iterating over an iterable object and applying an expression to each element to generate a new list. It provides a more readable and expressive way to create lists compared to traditional loops. List comprehension syntax is enclosed in square brackets [] and consists of an expression followed by a for clause or optional if clause.',
    ref: 'https://realpython.com/list-comprehension-python/',
    field: 'Python',
  },
  {
    question: 'What are the advantages of using Python for web development?',
    answer:
      'Advantages of using Python for web development include its simplicity and readability, extensive standard library, rich ecosystem of frameworks and libraries (e.g., Django, Flask), strong community support, cross-platform compatibility, and integration with other languages and platforms.',
    ref: 'https://www.fullstackpython.com/web-development.html',
    field: 'Python',
  },
  {
    question: 'What is the difference between supervised and unsupervised learning?',
    answer:
      'Supervised learning is a field of machine learning where the model is trained on a labeled dataset, meaning each input data point is paired with the corresponding target output. The goal is to learn a mapping from inputs to outputs. Unsupervised learning, on the other hand, involves training the model on an unlabeled dataset, where the model tries to find patterns or structures in the data without explicit guidance.',
    ref: 'https://www.geeksforgeeks.org/supervised-unsupervised-learning/',
    field: 'Data Scientist',
  },
  {
    question: 'Explain the bias-variance tradeoff in machine learning.',
    answer:
      "The bias-variance tradeoff is a fundamental concept in machine learning that deals with the tradeoff between bias and variance in model performance. Bias refers to the error introduced by approximating a real-world question with a simplified model, while variance refers to the model's sensitivity to fluctuations in the training data. A model with high bias tends to underfit the data, while a model with high variance tends to overfit the data. The goal is to find the right balance between bias and variance to achieve optimal model performance.",
    ref: 'https://machinelearningmastery.com/gentle-introduction-to-the-bias-variance-trade-off-in-machine-learning/',
    field: 'Data Scientist',
  },
  {
    question: 'What is the purpose of regularization in machine learning?',
    answer:
      "Regularization is a technique used to prevent overfitting in machine learning models by adding a penalty term to the cost function that discourages overly complex models. It helps to reduce the model's sensitivity to small fluctuations in the training data and improves its generalization performance on unseen data. Common regularization techniques include L1 regularization (Lasso), L2 regularization (Ridge), and elastic net regularization.",
    ref: 'https://towardsdatascience.com/intuitions-on-l1-and-l2-regularisation-235f2db4c261',
    field: 'Data Scientist',
  },
  {
    question: 'What are some common methods for feature selection in machine learning?',
    answer:
      'Common methods for feature selection in machine learning include filter methods (e.g., correlation analysis, mutual information), wrapper methods (e.g., recursive feature elimination, forward/backward selection), and embedded methods (e.g., Lasso regularization, decision tree-based feature importance). Feature selection aims to identify the most relevant features for prediction while reducing dimensionality and improving model performance.',
    ref: 'https://towardsdatascience.com/feature-selection-techniques-in-machine-learning-with-python-f24e7da3f36e',
    field: 'Data Scientist',
  },
  {
    question: 'What is cross-validation and why is it important in machine learning?',
    answer:
      "Cross-validation is a technique used to assess the performance of a machine learning model by splitting the dataset into multiple subsets (folds), training the model on some of the folds, and evaluating it on the remaining fold. This process is repeated multiple times, and the average performance across all folds is used as an estimate of the model's generalization performance. Cross-validation helps to provide a more reliable estimate of model performance and reduces the risk of overfitting.",
    ref: 'https://scikit-learn.org/stable/modules/cross_validation.html',
    field: 'Data Scientist',
  },
  {
    question: 'What is Oracle Database?',
    answer:
      'Oracle Database is a relational database management system (RDBMS) developed and marketed by Oracle Corporation. It is one of the most popular database management systems used for storing and managing structured data. Oracle Database provides features such as SQL support, data integrity, scalability, high availability, and security.',
    ref: 'https://www.oracle.com/database/',
    field: 'Oracle',
  },
  {
    question: 'Explain the difference between DDL, DML, and DCL in Oracle.',
    answer:
      'DDL (Data Definition Language) is used to define the structure of database objects such as tables, views, and indexes. DML (Data Manipulation Language) is used to manipulate data stored in database objects, such as inserting, updating, deleting, and querying data. DCL (Data Control Language) is used to control access to the database, such as granting and revoking privileges to users.',
    ref: 'https://www.guru99.com/dml-dcl-ddl-difference.html',
    field: 'Oracle',
  },
  {
    question: 'What are the different types of indexes in Oracle?',
    answer:
      'Oracle supports several types of indexes, including B-tree indexes, Bitmap indexes, Function-based indexes, Reverse indexes, and Index-Organized Tables (IOTs). Each field of index has its own advantages and use cases, depending on factors such as query patterns, data distribution, and performance requirements.',
    ref: 'https://www.oracletutorial.com/oracle-indexes/oracle-index-types/',
    field: 'Oracle',
  },
  {
    question: 'Explain the concept of a stored procedure in Oracle.',
    answer:
      'A stored procedure in Oracle is a precompiled collection of SQL and PL/SQL statements that are stored in the database and can be executed as a single unit. Stored procedures can accept input parameters, perform operations on the database, and return results to the caller. They are often used to encapsulate business logic, improve performance, and enforce security.',
    ref: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/lnpls/plsql-language-fundamentals.html#GUID-7A3174AD-0A9A-4C82-AF92-9C0ECD9A7050',
    field: 'Oracle',
  },
  {
    question: 'What is the role of the COMMIT and ROLLBACK statements in Oracle?',
    answer:
      'The COMMIT statement is used to permanently save any changes made during the current transaction to the database. It makes the changes visible to other users and releases any locks held on the affected data. The ROLLBACK statement is used to undo any changes made during the current transaction and restore the database to its state before the transaction began.',
    ref: 'https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_4010.htm',
    field: 'Oracle',
  },
  {
    question: 'What are React components?',
    answer:
      'React components are the building blocks of React applications. They are reusable, self-contained pieces of UI that encapsulate functionality and can be composed together to build complex user interfaces. React components can be either class components or functional components.',
    ref: 'https://reactjs.org/docs/components-and-props.html',
    field: 'ReactJS',
  },
  {
    question: 'Explain the virtual DOM in React.',
    answer:
      'The virtual DOM (Document Object Model) is a lightweight, in-memory representation of the actual DOM tree in React applications. It is used to improve performance by minimizing DOM manipulation operations. React compares the virtual DOM with the actual DOM and only updates the parts of the DOM that have changed, resulting in faster rendering and better user experience.',
    ref: 'https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom',
    field: 'ReactJS',
  },
  {
    question: 'What are props in React?',
    answer:
      'Props (short for properties) are a way to pass data from parent components to child components in React. They are read-only and are used to customize and configure child components. Props are passed as attributes to JSX elements and accessed within the child component using the `props` object.',
    ref: 'https://reactjs.org/docs/components-and-props.html',
    field: 'ReactJS',
  },
  {
    question: 'What is state in React?',
    answer:
      'State is a built-in feature in React that represents the current condition or data of a component. Unlike props, which are passed from parent components and are read-only, state is managed within the component and can be updated using the `setState()` method. Changes to the state trigger re-rendering of the component.',
    ref: 'https://reactjs.org/docs/state-and-lifecycle.html',
    field: 'ReactJS',
  },
  {
    question: 'What are React hooks?',
    answer:
      'React hooks are functions that enable functional components to use state and other React features without writing a class. They were introduced in React 16.8 and include hooks such as `useState()`, `useEffect()`, `useContext()`, and `useReducer()`. Hooks allow developers to write cleaner and more concise code.',
    ref: 'https://reactjs.org/docs/hooks-intro.html',
    field: 'ReactJS',
  },
  {
    question: 'What are Vue.js directives?',
    answer:
      'Vue.js directives are special tokens in the markup that tell the library to do something to a DOM element. The most common directives are `v-bind`, `v-model`, `v-if`, `v-for`, and `v-on`. Directives are prefixed with `v-` to indicate that they are special attributes provided by Vue.js.',
    ref: 'https://vuejs.org/v2/guide/syntax.html#Directives',
    field: 'VueJS',
  },
  {
    question: 'What is the Vue.js component lifecycle?',
    answer:
      'The Vue.js component lifecycle refers to the series of stages a Vue component goes through from creation to destruction. The lifecycle consists of various hooks or methods that allow developers to perform actions at different stages, such as `created`, `mounted`, `updated`, and `destroyed`. Understanding the component lifecycle is essential for managing component behavior and optimizing performance.',
    ref: 'https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram',
    field: 'VueJS',
  },
  {
    question: 'What is Vuex and how does it work?',
    answer:
      'Vuex is a state management pattern and library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules to ensure that the state can only be mutated in a predictable fashion. Vuex provides a single source of truth for the application state and facilitates communication between components.',
    ref: 'https://vuex.vuejs.org/',
    field: 'VueJS',
  },
  {
    question: 'What are Vue.js mixins?',
    answer:
      'Vue.js mixins are a way to distribute reusable functionalities for Vue components. A mixin is essentially an object containing component options that can be merged into the options of a target component using the `mixins` property. Mixins allow developers to encapsulate and share common functionalities across multiple components.',
    ref: 'https://vuejs.org/v2/guide/mixins.html',
    field: 'VueJS',
  },
  {
    question: 'What are computed properties in Vue.js?',
    answer:
      'Computed properties in Vue.js are properties that are automatically recalculated based on their dependencies whenever the dependent data changes. They are declared using the `computed` property in a Vue component and are cached based on their dependencies, ensuring that they are only recalculated when necessary.',
    ref: 'https://vuejs.org/v2/guide/computed.html',
    field: 'VueJS',
  },
  {
    question: 'What is PHP and its uses?',
    answer:
      'PHP (Hypertext Preprocessor) is a server-side scripting language primarily used for web development but can also be used as a general-purpose programming language. It is widely used for creating dynamic web pages and web applications, processing form data, interacting with databases, and more.',
    ref: 'https://www.php.net/manual/en/intro-whatis.php',
    field: 'PHP',
  },
  {
    question: 'What are Vue.js directives?',
    answer:
      'Vue.js directives are special tokens in the markup that tell the library to do something to a DOM element. The most common directives are v-bind, v-model, v-if, v-for, and v-on. Directives are prefixed with v- to indicate that they are special attributes provided by Vue.js.',
    ref: 'https://vuejs.org/v2/guide/syntax.html#Directives',
    field: 'VueJS',
  },
  {
    question: 'What is the Vue.js component lifecycle?',
    answer:
      'The Vue.js component lifecycle refers to the series of stages a Vue component goes through from creation to destruction. The lifecycle consists of various hooks or methods that allow developers to perform actions at different stages, such as created, mounted, updated, and destroyed. Understanding the component lifecycle is essential for managing component behavior and optimizing performance.',
    ref: 'https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram',
    field: 'VueJS',
  },
  {
    question: 'What is Vuex and how does it work?',
    answer:
      'Vuex is a state management pattern and library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules to ensure that the state can only be mutated in a predictable fashion. Vuex provides a single source of truth for the application state and facilitates communication between components.',
    ref: 'https://vuex.vuejs.org/',
    field: 'VueJS',
  },
  {
    question: 'What are Vue.js mixins?',
    answer:
      'Vue.js mixins are a way to distribute reusable functionalities for Vue components. A mixin is essentially an object containing component options that can be merged into the options of a target component using the mixins property. Mixins allow developers to encapsulate and share common functionalities across multiple components.',
    ref: 'https://vuejs.org/v2/guide/mixins.html',
    field: 'VueJS',
  },
  {
    question: 'What are computed properties in Vue.js?',
    answer:
      'Computed properties in Vue.js are properties that are automatically recalculated based on their dependencies whenever the dependent data changes. They are declared using the computed property in a Vue component and are cached based on their dependencies, ensuring that they are only recalculated when necessary.',
    ref: 'https://vuejs.org/v2/guide/computed.html',
    field: 'VueJS',
  },

  // PHP interview questions
  {
    question: 'What is PHP and its uses?',
    answer:
      'PHP (Hypertext Preprocessor) is a server-side scripting language primarily used for web development but can also be used as a general-purpose programming language. It is widely used for creating dynamic web pages and web applications, processing form data, interacting with databases, and more.',
    ref: 'https://www.php.net/manual/en/intro-whatis.php',
    field: 'PHP',
  },
  {
    question: 'What are PHP sessions?',
    answer:
      'PHP sessions allow you to store user information on the server for later use, such as maintaining login state or tracking user activity. Sessions are created using the session_start() function and are typically stored as files on the server or in a database. Session data is accessible across multiple pages of a website.',
    ref: 'https://www.php.net/manual/en/book.session.php',
    field: 'PHP',
  },
  {
    question: 'What is the difference between include and require in PHP?',
    answer:
      'Both include and require are used to include and evaluate a specified file in PHP, but they differ in their error handling behavior. If the specified file is not found, include generates a warning and continues execution, whereas require generates a fatal error and halts execution.',
    ref: 'https://www.php.net/manual/en/function.require.php',
    field: 'PHP',
  },
  {
    question: 'What is PHP PDO?',
    answer:
      'PDO (PHP Data Objects) is a PHP extension that provides a consistent interface for accessing databases in PHP. It supports multiple database drivers and provides prepared statements and parameterized queries, which help prevent SQL injection attacks. PDO is a more secure and flexible alternative to the traditional MySQL extension.',
    ref: 'https://www.php.net/manual/en/book.pdo.php',
    field: 'PHP',
  },
  {
    question: 'What is PHP autoloading?',
    answer:
      'PHP autoloading is a feature that automatically loads PHP classes when they are referenced but not yet loaded. It eliminates the need to manually include class files using require or include statements. Autoloading is typically implemented using spl_autoload_register() or the __autoload() function.',
    ref: 'https://www.php.net/manual/en/language.oop5.autoload.php',
    field: 'PHP',
  },

  // JavaScript interview questions
  {
    question: 'What is JavaScript?',
    answer:
      'JavaScript is a high-level, interpreted programming language that is primarily used to add interactivity and dynamic behavior to web pages. It is commonly used for client-side scripting, but can also be used for server-side development (Node.js) and desktop application development (Electron). JavaScript is an essential technology for web development.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    field: 'JavaScript',
  },
  {
    question: 'What are closures in JavaScript?',
    answer:
      "Closures are a fundamental concept in JavaScript that allows functions to retain access to variables from their containing lexical scope even after the scope has closed. They are created whenever a function is defined within another function and have access to the outer function's variables. Closures are commonly used to create private variables and functions in JavaScript.",
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    field: 'JavaScript',
  },
  {
    question: 'What is event delegation in JavaScript?',
    answer:
      'Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events that occur on its child elements. This allows you to efficiently manage event handling for dynamically created or large numbers of elements. Event delegation improves performance and simplifies event handling code.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/Events/event_delegation',
    field: 'JavaScript',
  },
  {
    question: 'What is a promise in JavaScript?',
    answer:
      'A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous code in a more readable and manageable way. Promises have methods such as then() and catch() for handling successful and failed outcomes, respectively.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
    field: 'JavaScript',
  },
  {
    question: 'What are arrow functions in JavaScript?',
    answer:
      'Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They provide a more concise syntax compared to traditional function expressions and automatically bind the this value to the surrounding lexical context. Arrow functions are commonly used for writing inline and anonymous functions.',
    ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
    field: 'JavaScript',
  },

  // Java interview questions
  {
    question: 'What is Java and its uses?',
    answer:
      'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation). It is widely used for developing desktop, web, and mobile applications, as well as enterprise software and large-scale systems. Java applications are platform-independent and can run on any device that has the Java Virtual Machine (JVM) installed.',
    ref: 'https://www.java.com/en/about/what.jsp',
    field: 'Java',
  },
  {
    question: 'What is the difference between JDK, JRE, and JVM in Java?',
    answer:
      'JDK (Java Development Kit) is a software development kit used for developing Java applications. JRE (Java Runtime Environment) is a runtime environment that provides the libraries, resources, and JVM (Java Virtual Machine) required to run Java applications. JVM is a virtual machine that executes Java bytecode and provides a platform-independent execution environment for Java programs.',
    ref: 'https://www.oracle.com/java/technologies/javase-jdk11-downloads.html',
    field: 'Java',
  },
  {
    question: 'What are the different types of inheritance in Java?',
    answer:
      'Java supports four types of inheritance: single inheritance, where a class inherits from only one superclass; multiple inheritance, where a class inherits from multiple superclasses (not supported in Java); multilevel inheritance, where a subclass inherits from a superclass, which in turn inherits from another superclass; and hierarchical inheritance, where multiple classes inherit from the same superclass.',
    ref: 'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html',
    field: 'Java',
  },
  {
    question: 'What are access modifiers in Java?',
    answer:
      'Access modifiers in Java are keywords used to control the visibility and accessibility of classes, variables, methods, and constructors in a Java program. There are four access modifiers in Java: public, protected, default (no modifier), and private. They determine whether a class member can be accessed from other classes and packages.',
    ref: 'https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html',
    field: 'Java',
  },

  {
    question: 'What is the difference between == and equals() method in Java?',
    answer:
      'In Java, == is used to compare the reference values of two objects, while the equals() method is used to compare the contents or values of two objects. The default implementation of the equals() method in the Object class compares the memory addresses of the objects, but it can be overridden in subclasses to provide custom equality comparisons.',
    ref: 'https://docs.oracle.com/javase/tutorial/java/IandI/objectclass.html',
    field: 'Java',
  },
];

export const articles: Article[] = [
  {
    title: 'Sharing a state between windows without a server',
    author: 'notachraf',
    tags: ['Javascript', 'Webdev', 'Tutorial'],
    summary: 'Recently, there was a gif trending on social networks displaying an amazing piece of art made by...',
    url: 'https://dev.to/notachraf/sharing-a-state-between-windows-without-a-serve-23an?ref=dailydev',
    publishedDate: '2023-12-26T10:48:58Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F968077%2F8f6140fc-8ac0-4666-9fb8-2b6090f0da08.jpg',
  },
  {
    title: 'Create your OWN intrusive javascript blocker script 🛑',
    author: 'notachraf',
    tags: ['webdev', 'javascript', 'tutorial'],
    summary: 'Recently, one of the comments on my previous article about sharing a state between windows asked me...',
    url: 'https://dev.to/notachraf/sharing-a-state-between-windows-without-a-serve-23an',
    publishedDate: '2023-12-26T10:48:58Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F968077%2F8f6140fc-8ac0-4666-9fb8-2b6090f0da08.jpg',
  },
  {
    title: 'SOP : Of CORS it works like that !',
    author: 'notachraf',
    tags: [],
    summary: 'Most of web developers encounter at one point or another some errors about CORS in the console, of...',
    url: 'https://dev.to/notachraf/sop-of-cors-it-works-like-that--3a87',
    publishedDate: '2023-07-11T19:21:58Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F968077%2F8f6140fc-8ac0-4666-9fb8-2b6090f0da08.jpg',
  },
  {
    title: 'One thing I wish I knew when I first started to code is... : CodeNewbie Podcast',
    author: 'Rachel Fazio',
    tags: ['codenewbie', 'podcast', 'ai'],
    summary:
      '"Hi and welcome back to CodeNewbie Podcast, our little corner of the internet in which we share weekly...',
    url: 'https://dev.to/notachraf/sop-of-cors-it-works-like-that--3a87',
    publishedDate: '2024-04-04T23:52:26Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F345658%2Fa72b6b8b-b954-47fb-8919-ab380905f26b.jpg',
  },
  {
    title: "Who's looking for open source contributors? (week 66)",
    author: 'Rachel Fazio',
    tags: ['opensource'],
    summary:
      "Discover which open source projects are actively seeking contributors. Learn how you can make a meaningful contribution to the open source community and gain valuable experience. Find out who's looking for open source contributors now.",
    url: 'https://dev.to/opensauced/whos-looking-for-open-source-contributors-week-66-2ld7',
    publishedDate: '2024-04-05T17:55:01Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F345658%2Fa72b6b8b-b954-47fb-8919-ab380905f26b.jpg',
  },
  {
    title: 'Sharing a state between windows without a server',
    author: 'notachraf',
    tags: ['Javascript', 'Webdev', 'Tutorial'],
    summary: 'Recently, there was a gif trending on social networks displaying an amazing piece of art made by...',
    url: 'https://dev.to/notachraf/sharing-a-state-between-windows-without-a-serve-23an?ref=dailydev',
    publishedDate: '2023-12-26T10:48:58Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F968077%2F8f6140fc-8ac0-4666-9fb8-2b6090f0da08.jpg',
  },
  {
    title: 'Create your OWN intrusive javascript blocker script 🛑',
    author: 'notachraf',
    tags: ['webdev', 'javascript', 'tutorial'],
    summary: 'Recently, one of the comments on my previous article about sharing a state between windows asked me...',
    url: 'https://dev.to/notachraf/sharing-a-state-between-windows-without-a-serve-23an',
    publishedDate: '2023-12-26T10:48:58Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F968077%2F8f6140fc-8ac0-4666-9fb8-2b6090f0da08.jpg',
  },
  {
    title: 'SOP : Of CORS it works like that !',
    author: 'notachraf',
    tags: [],
    summary: 'Most of web developers encounter at one point or another some errors about CORS in the console, of...',
    url: 'https://dev.to/notachraf/sop-of-cors-it-works-like-that--3a87',
    publishedDate: '2023-07-11T19:21:58Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F968077%2F8f6140fc-8ac0-4666-9fb8-2b6090f0da08.jpg',
  },
  {
    title: 'One thing I wish I knew when I first started to code is... : CodeNewbie Podcast',
    author: 'Rachel Fazio',
    tags: ['codenewbie', 'podcast', 'ai'],
    summary:
      '"Hi and welcome back to CodeNewbie Podcast, our little corner of the internet in which we share weekly...',
    url: 'https://dev.to/notachraf/sop-of-cors-it-works-like-that--3a87',
    publishedDate: '2024-04-04T23:52:26Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F345658%2Fa72b6b8b-b954-47fb-8919-ab380905f26b.jpg',
  },
  {
    title: "Who's looking for open source contributors? (week 66)",
    author: 'Rachel Fazio',
    tags: ['opensource'],
    summary:
      "Discover which open source projects are actively seeking contributors. Learn how you can make a meaningful contribution to the open source community and gain valuable experience. Find out who's looking for open source contributors now.",
    url: 'https://dev.to/opensauced/whos-looking-for-open-source-contributors-week-66-2ld7',
    publishedDate: '2024-04-05T17:55:01Z',
    pip: 'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F345658%2Fa72b6b8b-b954-47fb-8919-ab380905f26b.jpg',
  },
];
