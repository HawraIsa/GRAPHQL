import client from './graphql.js';
import { gql } from '@apollo/client';

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('jwt');
    window.location.href = 'login.html';
});

async function fetchUserData() {
    const query = gql`
        query {
            user {
                id
                login
                # Add more fields as needed
            }
        }
    `;
    const result = await client.query({ query });
    const userData = result.data.user[0];
    document.getElementById('profile-data').innerHTML = `
        <p>ID: ${userData.id}</p>
        <p>Login: ${userData.login}</p>
        <!-- Add more fields as needed -->
    `;
}

async function fetchXPProgress() {
    const query = gql`
        query {
            transaction(where: { type: { _eq: "xp" } }) {
                amount
                createdAt
            }
        }
    `;
    const result = await client.query({ query });
    const xpData = result.data.transaction;

    // Process data and create an SVG graph
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "300");

    xpData.forEach((xp, index) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", 50 * (index + 1));
        circle.setAttribute("cy", 300 - xp.amount / 10);
        circle.setAttribute("r", 5);
        svg.appendChild(circle);
    });

    document.getElementById('xp-progress').appendChild(svg);
}

async function fetchPassFailRatio() {
    const query = gql`
        query {
            result {
                grade
            }
        }
    `;
    const result = await client.query({ query });
    const grades = result.data.result;

    const passCount = grades.filter(grade => grade.grade === 1).length;
    const failCount = grades.filter(grade => grade.grade === 0).length;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "300");

    const passBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    passBar.setAttribute("x", "50");
    passBar.setAttribute("y", 300 - (passCount * 10));
    passBar.setAttribute("width", "50");
    passBar.setAttribute("height", passCount * 10);
    passBar.setAttribute("fill", "green");

    const failBar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    failBar.setAttribute("x", "150");
    failBar.setAttribute("y", 300 - (failCount * 10));
    failBar.setAttribute("width", "50");
    failBar.setAttribute("height", failCount * 10);
    failBar.setAttribute("fill", "red");

    svg.appendChild(passBar);
    svg.appendChild(failBar);

    document.getElementById('pass-fail-ratio').appendChild(svg);
}

fetchUserData();
fetchXPProgress();
fetchPassFailRatio();
