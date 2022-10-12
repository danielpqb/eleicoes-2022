CREATE TABLE "elected_candidates" (
	"id" serial PRIMARY KEY,
	"number" BIGINT NOT NULL,
	"identifier" BIGINT NOT NULL,
	"name" TEXT NOT NULL,
	"alias" TEXT NOT NULL,
	"party" TEXT NOT NULL,
	"votes" BIGINT NOT NULL,
	"state_name" TEXT NOT NULL,
	"state_uf" TEXT NOT NULL,
	"state_votes" BIGINT NOT NULL
);