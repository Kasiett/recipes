set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";


CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "recipes" (
	"recipeId" serial NOT NULL,
	"title" TEXT NOT NULL,
  "type" TEXT NOT NULL,
	"imageUrl" TEXT NOT NULL,
	"description" TEXT NOT NULL,
  "ingredients" TEXT[]NOT NULL,
  "instructions" TEXT[] NOT NULL,
  "notes" TEXT NOT NULL,
	"userId" integer NOT NULL,
	"createdAt" timestamptz(6) NOT NULL default now(),
	CONSTRAINT "recipes_pk" PRIMARY KEY ("recipeId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "comments" (
	"commentId" serial NOT NULL,
	"recipeId" integer NOT NULL,
	"userId" integer NOT NULL,
	"comment" TEXT NOT NULL,
	"createdAt" timestamptz(6) NOT NULL default now(),
	CONSTRAINT "comments_pk" PRIMARY KEY ("commentId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "ratings" (
	"ratingId" serial NOT NULL,
	"recipeId" int NOT NULL,
	"userId" int NOT NULL,
	"rating" TEXT,
	"createdAt" timestamptz(6) NOT NULL default now(),
	CONSTRAINT "ratings_pk" PRIMARY KEY ("ratingId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "likes" (
	"likeId" serial NOT NULL,
	"userId" int NOT NULL,
	"recipeId" int NOT NULL,
	CONSTRAINT "likes_pk" PRIMARY KEY ("likeId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "favorites" (
	"favoriteId" serial NOT NULL,
	"recipeId" int NOT NULL,
	"userId" int NOT NULL,
	CONSTRAINT "favorites_pk" PRIMARY KEY ("favoriteId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "recipes" ADD CONSTRAINT "recipes_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk0" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "likes" ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "likes" ADD CONSTRAINT "likes_fk1" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");
