const swagger = {
  openapi: "3.0.0",
  info: {
    title: "API pour films et reviews",
    version: "1.0.0",
    description: "Api pour gérer des films et des reviews",
  },
  servers: [
    {
      url: "http://localhost:3000/",
    },
  ],
  tags: [
    {
      name: "Films",
      description: "API pour gérer les films",
    },
    {
      name: "Reviews",
      description: "API pour gérer les reviews",
    },
  ],
  paths: {
    "/films": {
      get: {
        tags: [
          "Films"
        ],
        summary: "Liste des films",
        operationsId: "listFilms",
        responses: {
          "200": {
            description: "Liste des films",
          }
  
        }
      },
      post: {
        tags: [
          "Films"
        ],
        summary: "Créer un film",
        operationsId: "createFilm",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string"
                  },
                  director: {
                    type: "string"
                  },
                  year: {
                    type: "integer"
                  },
                  genre: {
                    type: "string"
                  }
                },
                required: ["title", "director", "year", "genre"]
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Film créé",
          }
        }
      }
    },
    "/films/{id}": {
      get: {
        tags: [
          "Films"
        ],
        summary: "Récupère un film avec l'ID",
        operationsId: "getFilmById",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }],
        responses: {
          "200": {
            description: "Film demandé",
          }
        }
      },
      put: {
        tags: [
          "Films"
        ],
        summary: "Met à jour le film grâce à l'id",
        operationsId: "updateFilm",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string"
                  },
                  director: {
                    type: "string"
                  },
                  year: {
                    type: "integer"
                  },
                  genre: {
                    type: "string"
                  }
                },
                required: ["title", "director", "year", "genre"]
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Film mis à jour",
          }
        }
      },
      delete: {
        tags: [
          "Films"
        ],
        summary: "Supprime un livre agrâce à l'ID",
        operationsId: "deleteFilm",
        parameters: [
          {
            name: "id",
            in : "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": {
            description: "Le film à été supprimé",
          }
        }
      }
    },
    "/reviews/films/{id}/reviews": {
      get: {
        tags: [
          "Reviews"
        ],
        summary: "Liste des reviews pour le film grâce à l'ID",
        operationsID: "listReviewsByFilmId",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "200": {
            description: "Voici la liste des reviews pour ce film",
          }
        }         
      },
      post: {
        tags: [
          "Reviews"
        ],
        summary: "Créer une review pour le film grâce à l'id",
        operationsID: "createReviewByFilmId",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }          
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  author: {
                    type: "string"
                  },
                  rating: {
                    type: "integer"
                  },
                  comment: {
                    type: "string"
                  }
                },
                required: ["content", "rating", "author"]
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Review créée pour le film",
          }
        }
      }
    },
    "/reviews/{id}": {
        delete: {
          tags: [
            "Reviews"
          ],
          summary: "Supprime la review grâce à l'id",
          operationsID: "deleteReview",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer"
              }
            }
          ],
          responses: {
            "200": {
              description: "La review à été supprimée",
            }
          }
        }
      }
  }
};
      

export const openApiSpec = swagger;