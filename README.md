# Table of contents
* [General info](#general-info)
* [Demo](#demo)
* [Used Stack](#used-stack)
* [Setup](#setup)

# General Info 

A node server API for Admin Dasboard

# Demo
https://sellanycar-admin-api.herokuapp.com/

# Used Stack

  - Node js
  - Express
  - MongoDB
  
# Setup

install dependencies:

```sh
npm install 
```

Run localy

to run localy you need to create `.env` file first and add variables 
```
  DB_URI: <MongoDb_URI>,
  AUTH_NAMESPACE: <Auth0_Namespace>,
  JWKSURI: <Auth0_Jwks>,
  JWT_AUDIENCE: <Auth0_Audience>,
  JWT_ISSUER: <Auth0_ISSUER>,
```

```sh
npm run dev 
```

Thanks.
