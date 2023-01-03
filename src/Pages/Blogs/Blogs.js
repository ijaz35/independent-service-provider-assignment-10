import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="row w-75 mx-auto mt-5 pt-5">
                <div>
                    <h4 className='text-start'>Question1: What is the difference between authorization and authentication?</h4>
                    <p className='text-start'>Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.
                        Authentication (AuthN) is a process that verifies that someone or something is who they say they are. Technology systems typically use some form of authentication to secure access to an application or its data.
                        Authorization is the security process that determines a user or service's level of access. In technology, we use authorization to give users or services permission to access some data or perform a particular action.
                    </p>
                </div>
                <div className='my-5'>
                    <h4 className='text-start'>Question2: Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p className='text-start'>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

                        When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.<br />
                        Other options to implement authentication is given below </p>
                    <ul>
                        <li className='text-start'>Okta</li>
                        <li className='text-start'>Auth0</li>
                        <li className='text-start'>JumpCloud</li>
                        <li className='text-start'>Rippling</li>
                        <li className='text-start'>ForgeRock</li>
                        <li className='text-start'>SecureAuth Identity Platform</li>
                        <li className='text-start'>Microsoft Azure Active Directory</li>
                        <li className='text-start'>CyberArk Identity</li>
                        <li className='text-start'>Microsoft</li>
                        <li className='text-start'>OneLogin</li>
                        <li className='text-start'>Duo</li>
                        <li className='text-start'>IBM</li>
                        <li className='text-start'>RSA</li>
                        <li className='text-start'>Ping Identity</li>
                        <li className='text-start'>SecureAuth</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h4 className='text-start'>Question3: What other services does firebase provide other than authentication?</h4>

                    <p className='text-start'>Firebase provides various services other than authentication. The name of those services are given below:<br /></p>
                    <ol>
                        <li className='text-start'>Firebase machine learning</li>
                        <li className='text-start'>Firebase realtime database</li>
                        <li className='text-start'>Firebase push notification</li>
                        <li className='text-start'>Firebase cloud storage</li>
                        <li className='text-start'>Firebase Analytics</li>
                        <li className='text-start'>Firebase crash reports</li>
                        <li className='text-start'>Firebase performance</li>
                    </ol>
                </div>

            </div>
            <Link className='mb-5 pb-5 text-end w-100 d-block text-decoration-none text-dark fw-bolder' to="/">Back to home</Link>

        </div>
    );
};

export default Blogs;