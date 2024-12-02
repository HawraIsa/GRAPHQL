# GRAPHQL
    GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for data. it is similar to RestAPI but different in these points :

    1. Single Endpoint: All queries and mutations are sent to a single endpoint.
    2. Precise Data Retrieval: Clients specify exactly what data they need, and the server returns only that data.
    3. Nested Requests: Allows fetching related resources in a single request, reducing the number of network calls.
    4. Flexible Queries: Clients can request exactly the data they need.
    5. Schema and Type System: A strongly-typed schema defines the shape of the API, making it easier to understand and use.
    6. Reduced Network Overhead: By fetching only the needed data in a single request, it can reduce the number of network calls and the amount of data transferred.
    7. Client-Specified Data Needs: Optimizes performance by tailoring responses to client needs.
    8. Complex Caching: Caching is more complex because a single endpoint serves multiple query types. Custom caching strategies are often required.
    9. Subscriptions: Supports real-time updates via subscriptions, allowing clients to receive updates over a WebSocket connection when data changes.
    10. Granular Errors: Returns errors specific to fields in the query, allowing clients to handle partial successes.
    11. Introspective Schema: Tools can introspect the schema to provide documentation and type safety, aiding development.

## Installing graphql & requirements :
    1. install nodejs or just [***** open the live server *****]
    2. install graphql :
        npm init
        npm install graphql --save

    3. install apollo client for graphql query :
        npm install @apollo/client graphql

        npm install express
        npm install jsonwebtoken

    4. node run.js        inside /assets directory
        

## Creating file structure :
    graphql/
    ├── README.md
    ├── run.js
    └── assets
        ├── css
            └── style.css
        ├── html
            ├── 404.html
            ├── index.html
            └── profile.html
        └── js
            ├── auditSVG.js
            ├── authGraphQL.js
            ├── fetch-data.js
            ├── logout.js
            ├── passFailSVG.js
            ├── progressSVG.js
            ├── storeToken.js
            └── xpGainedSVG.js
## Deployment : 
    Github Pages

## Logic :
### Login : 
1. Authenticate using the token.
2. Fetch user data.
3. Verify the fetched username against the provided username.
4. store the token retrieved to fetch the data for the profile page.
