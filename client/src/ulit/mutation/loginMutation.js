import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login( $username: String!, $password: String! ) {
        login( username: $username, password: $password ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SIGN_UP_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser( username: $username, password: $password, email: $email ) {
            token 
            user {
                _id
                username
                email
            }
        }
    }
`;