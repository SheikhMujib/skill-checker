import React from "react";

const Blog = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 my-5">
        <div className="col my-4">
          <h3>Questions and Answers</h3>
        </div>
        <div className="col">
          <h5>Question-1: What is the purpose of react router?</h5>
          <p>
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route. React Router is a standard library system built on
            top of the React and used to create routing in the React application
            using React Router Package. It provides the synchronous URL on the
            browser with data that will be displayed on the web page. It
            maintains the standard structure and behavior of the application and
            mainly used for developing single page web applications.
          </p>
        </div>
        <div className="col">
          <h5>Question-2: How does Context API work?</h5>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context API is a (kind of) new feature
            added in version 16.3 of React that allows one to share state across
            the entire app (or part of it) lightly and with ease.
          </p>
          <p>
            React.createContext() is all we need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </p>
        </div>
        <div className="col">
          <h5>Question-3: What is the purpose of useRef in React?</h5>
          <p>
            The useRef Hook allows us to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          <p>
            If we tried to count how many times our application renders using
            the useState Hook, we would be caught in an infinite loop since this
            Hook itself causes a re-render. To avoid this, we can use the useRef
            Hook.
          </p>
          <p>
            In general, we want to let React handle all DOM manipulation. But
            there are some instances where useRef can be used without causing
            issues. In React, we can add a ref attribute to an element to access
            it directly in the DOM.
          </p>
          <p>
            The useRef Hook can also be used to keep track of previous state
            values. This is because we are able to persist useRef values between
            renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
