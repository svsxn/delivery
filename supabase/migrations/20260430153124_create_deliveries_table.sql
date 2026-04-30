create table "public"."deliveries" (
    "id" uuid not null default gen_random_uuid(),
    "amount" numeric not null,
    "created_at" timestamp with time zone not null default now(),
    constraint "deliveries_pkey" primary key (id)
);
