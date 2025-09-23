import { jest } from "@jest/globals";
import { listFilms } from "../src/services/filmsServices.js";

jest.unstable_mockModule("../src/services/filmsServices.js", () => ({
  listFilms: jest.fn(),
  createFilm: jest.fn(),
}));

const { default: request } = await import("supertest");
const { default: app } = await import("../src/app.js");
const filmServices = await import("../src/services/filmsServices.js");

describe("Films", () => {

  it("GET /films -> array (may be empty)", async () => {
    filmServices.listFilms.mockResolvedValue([]);

    const res = await request(app).get("/films");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /films -> film created", async () => {
    const filmData = {
      title: "Naruto",
      director: "Kishimoto",
      year: 2002,
      genre: "Shonen",
    };

    const createdFilm = { id: 1, ...filmData };

    filmServices.createFilm.mockResolvedValue(createdFilm);

    const res = await request(app).post("/films").send(filmData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Naruto");
    expect(res.body).toHaveProperty("director", "Kishimoto");
    expect(res.body).toHaveProperty("year", 2002);
    expect(res.body).toHaveProperty("genre", "Shonen");
    expect(res.body).toHaveProperty("id");
  });
});
