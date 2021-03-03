
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


-- NEED TABLE FOR VEGETABLES
CREATE TABLE "vegetables" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (150),
    "description" VARCHAR (300),
    "seed_spacing_area_sq_in" DECIMAL,
    "date_to_plant" DATE,
    "days_to_harvest" DECIMAL,
    "yield_per_sq_ft" DECIMAL,
    "url" varchar(1000),
    "search_count" INT DEFAULT 0
);
-- NEED TABLE FOR GARDEN BEDS