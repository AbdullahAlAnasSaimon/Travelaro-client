import React from 'react';

const Blog = () => {
  return (
    <div className='w-11/12 md:w-9/12 mx-auto my-10'>
      <div className='my-8'>
        <h2 className='text-2xl font-semibold my-3'>1. Difference between SQL and NoSQL</h2>
        <p className='my-3'>SQL :
          RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
          These databases have fixed or static or predefined schema
          These databases are not suited for hierarchical data storage.
          These databases are best suited for complex queries
          Vertically Scalable
          Follows ACID property
          Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</p>
        <p className='my-3'>NOSQL :
          Non-relational or distributed database system.
          They have dynamic schema
          These databases are best suited for hierarchical data storage.
          These databases are not so good for complex queries
          Horizontally scalable
          Follows CAP(consistency, availability, partition tolerance)
          Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</p>
      </div>

      <div className='my-8'>
        <h2 className='text-2xl font-semibold my-3'>2. What is JWT, and how does it work?</h2>
        <p className='my-3'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        <p className='my-3'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
        <p className='my-3'>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          Once decoded, you will get two JSON strings:

          The header and the payload.
          The signature.
          The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.</p>
      </div>

      <div className='my-8'>
        <h2 className='text-2xl font-semibold my-3'>3. What is the difference between javascript and NodeJS?</h2>
        <p className='my-3'>Javascript:
          Javascript is a programming language that is used for writing scripts on the website.
          Javascript can only be run in the browsers.
          It is basically used on the client-side.
          Javascript is capable enough to add HTML and play with the DOM.
          Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
          Javascript is used in frontend development.
          Some of the javascript frameworks are RamdaJS, TypedJS, etc.
          It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</p>
        <p className='my-3'>NodeJs:
          NodeJS is a Javascript runtime environment.
          We can run Javascript outside the browser with the help of NodeJS.
          It is mostly used on the server-side.
          Nodejs does not have capability to add HTML tags.
          V8 is the Javascript engine inside of node.js that parses and runs Javascript.
          Nodejs is used in server-side development.
          Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
          Nodejs is written in C, C++ and Javascript.</p>
      </div>

      <div className='my-8'>
        <h2 className='text-2xl font-semibold my-3'>4. How does NodeJS handle multiple requests at the same time?</h2>
        <p className='my-3'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
        <p className='my-3'>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
      </div>

    </div>
  );
};

export default Blog;