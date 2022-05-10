import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>Deffirence between javascript and node js</h3>
            <p>js
                1.Javascript can only be run in the browsers.
                2.It is basically used on the client-side.
                3.Javascript is capable enough to add HTML and play with the DOM.
                4.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                5.Javascript is used in frontend development

                nodejs
                1.NodeJS is a Javascript runtime environment.
                2.We can run Javascript outside the browser with the help of NodeJS.
                3.It is mostly used on the server-side.
                4.Nodejs does not have capability to add HTML tags.
                5.V8 is the Javascript engine inside of node.js that parses and runs Javascript.
            </p>
            <h3> When should I use Nodejs?</h3>

            <p>  Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
            </p>
            <h3> Differences between sql and nosql databases</h3>
            <p>
                SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                SQL databases are table-based, while NoSQL databases are document,key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
        </div>
    );
};

export default Blog;