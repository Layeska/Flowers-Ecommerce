const superTest = require("supertest");
const app = require("../app");
const { Users } = require("../models");
const server = require("../server");
const dataBase = require("../utils/database");

const api = superTest(app);

describe("Tests for endpoint users - Get", () => {
    test("test that endpoint api/v1/user returns a json", async() => {
        await api.get("/api/v1/user").expect(201).expect("Content-Type", /application\/json/);
    });

    test("test that endpoint api/v1/user returns array", async() => {
        const {body} = await api.get("/api/v1/user");

        expect(body).toBeInstanceOf(Array);
    });
});

describe("tests for creating a user", () => {
    const userTester = {
        userName: "Layeska",
        email: "lisa13suarez@gmail.com",
        password: "17df69a"
    };

    test("Check that a user can be created", async () => {
        await api.post("/api/v1/user").expect(201).send(userTester);
    });
});

afterAll( async() => {
    await Users.destroy({where: {email: "lisa13suarez@gmail.com"}});
    server.close();
    dataBase.close();
});